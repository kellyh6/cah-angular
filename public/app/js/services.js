angular.module('Services', [])
.factory('Auth', ["$window", function($window){
  return {
    saveToken: function(token){
      $window.localStorage["auth-token"] = token;
    },
    getToken: function(){
      return $window.localStorage["auth-token"];
    },
    removeToken: function(){
      $window.localStorage.removeItem("auth-token");
    },
    isLoggedIn: function(){
      var token = this.getToken();
      return token ? true : false;
    },
    currentUser: function(){
      if(this.isLoggedIn()){
        var token = this.getToken();
        try {
          //vulnerable code
          var payload = JSON.parse($window.atob(token.split(".")[1]));
          console.log("payload decoded:", payload);
          //payload has user data in it
          return payload;

        } catch (err){
          //graceful error handling
          console.log(err);
          return false;
        }
      }
      return false;
    }
  };
}])
.factory("AuthInterceptor", ["Auth", function(Auth){
  return {
    request: function(config){
      var token = Auth.getToken();
      if(token){
        config.headers.Authorization = "Bearer " + token;
      }
      return config;
    }
  };
}])
.factory("Alerts", [function(){
  var alerts = [];

  return {
    clear: function(){
      alerts = [];
    },
    add: function(type, msg){
      alerts.push({type: type, msg: msg});
    },
    get: function(){
      return alerts;
    },
    remove: function(index){
      alerts.splice(index, 1);
    }
  };
}])
// Cards factory
.factory('BlackCardAPI', ['$http', function($http){
  var blackCards = [];
  return {
    getCards: function(){
      return $http.get("api/blackCards")
      .then(function success(response){
        if(blackCards.length === 0){
          blackCards = response.data;
        }
        return blackCards;
      }, function error(err){
        console.log("error", err);
        return null;
      });
    }
  };
}])
.factory('WhiteCardAPI', ['$http', function($http){
  var whiteCards = [];
  return {
    getCards: function(){
      return $http.get("api/whiteCards")
      .then(function success(response){
        if(whiteCards.length === 0){
          whiteCards = response.data;
        }
        return whiteCards;
      }, function error(err){
        console.log("error", err);
        return null;
      });
    }
  };
}])
.factory('QuestionsFactory', [function(){
  return {
    getCards: function(){
      return [
        {question: "I'm sorry professor, I couldn't complete my homework because _________."},
        {question: "_________. It's a trap!"},
        {question: "What is Batman's guilty pleasure?"},
        {question: "I get by with a little help from _________."},
        {question: "It's a pity that kids these days are all getting involved with __________."},
        {question: "What will I bring back in time to convince people that I am a powerful wizard?"},
        {question: "When I am President of the United States, I will create the Department of __________."},
        {question: "What never fails to liven up the party?"},
        {question: "But before I kill you, Mr. Bond, I must show you __________."},
        {question: "The class field trip was completely ruined by _________."},
        {question: "What's my secret power?"},
        {question: "TSA guidelines now prohibit __________ on airplanes."},
        {question: "______ would be woefully incomplete without ______."},
        {question: "After months of debate, the Occupy Wall Street General Assembly could only agree on “More ______!”"},
        {question: "Before ______, all we had was ______."},
        {question: "Before I run for president, I must destroy all evidence of my involvement with ______."},
        {question: "Charades was ruined for me forever when my mom had to act out ______."},
        {question: "During his midlife crisis, my dad got really into ______."},
        {question: "Everyone down on the ground! We don’t want to hurt anyone. We’re just here for ______."},
        {question: "I spent my whole life working toward ______, only to have it ruined by ______."},
        {question: "I went from ______ to ______, all thanks to ______."},
        {question: "If God didn’t want us to enjoy ______, he wouldn’t have given us ______."},
        {question: "In his newest and most difficult stunt, David Blaine must escape from ______."},
        {question: "Little Miss Muffet Sat on a tuffet, Eating her curds and ______."},
        { question: "Members of New York’s social elite are paying thousands of dollars just to experience ______."},
        { question: "My country, ’tis of thee, sweet land of ______."},
        { question: "My mom freaked out when she looked at my browser history and found ______.com/______."},
        { question: "My new favorite porn star is Joey “______” McGee."},
        { question: "Next time on Dr. Phil: How to talk to your child about ______."},
        { question: "Only two things in life are certain: death and ______."},
        { question: "The Five Stages of Grief: denial, anger, bargaining, ______, acceptance."},
        { question: "The healing process began when I joined a support group for victims of ______."},
        { question: "The votes are in, and the new high school mascot is ______."},
        { question: "This is your captain speaking. Fasten your seatbelts and prepare for ______."},
        { question: "This month’s Cosmo: “Spice up your sex life by bringing ______ into the bedroom.”"},
        { question: "Tonight on 20/20: What you don’t know about ______ could kill you."},
        { question: "You haven’t truly lived until you’ve experienced ______ and ______ at the same time."},
        { question: "A remarkable new study has shown that chimps have evolved their own primitive version of _____."},
        { question: "What’s harshing my mellow, man?"},
        { question: "Your persistence is admirable, my dear Prince. But you cannot win my heart with _____ alone."},
      ];
    }};
}])
.factory('AnswersFactory', [function(){
  return {
    getCards: function(){
      return [
        {answer: "The American Dream"},
        {answer: "Children on Leashes"},
        {answer: "Picking your scabs."},
        {answer: "A saxophone solo."},
        {answer: "Gandalf sax"},
        {answer: "Party at the shire"},
        {answer: "My love life."},
        {answer: "My friends."},
        {answer: "Pizza."},
        {answer: "Upgrading homeless people to mobile hotspots."},
        {answer: "Starving Children."},
        {answer: "Not giving a shit about the third world."},
        {answer: "Hurricane Katrina."},
        {answer: "Vigorous Jazz Hands."},
        {answer: "Raptor attacks."},
        {answer: "Actually taking candy from a baby."},
        {answer: "Children on leashes."},
        {answer: "Cheating in the special olympics"},
        {answer: "Shaquille O'Neal's acting career"},
        {answer: "Bees?"},
        {answer: "A lifetime of sadness."},
        {answer: "The American Dream."},
        {answer: "The Kool-Aid Man."},
        {answer: "A supersoaker filled with cat pee."},
        {answer: "Getting married, having a few kids, buying some stuff, moving to Florida, and dying."},
        {answer: "Batman."},
        { answer: "A 55-gallon drum of lube."},
        { answer: "A bigger, blacker dick."},
        { answer: "A Burmese tiger pit."},
        { answer: "A dollop of sour cream."},
        { answer: "A fortuitous turnip harvest."},
        { answer: "A magic hippie love cloud."},
        { answer: "A man in yoga pants with a ponytail and feather earrings."},
        { answer: "A piñata full of scorpions"},
        { answer: "A sad fat dragon with no friends."},
        { answer: "A slightly shittier parallel universe."},
        { answer: "A sofa that says “I have style, but I like to be comfortable.”"},
        { answer: "A soulful rendition of “Ol’ Man River.”"},
        { answer: "A squadron of moles wearing aviator goggles."},
        { answer: "A sweaty, panting leather daddy."},
        { answer: "A sweet spaceship."},
        { answer: "All of this blood."},
        { answer: "An army of skeletons."},
        { answer: "An ether-soaked rag."},
        { answer: "An unhinged ferris wheel rolling toward the sea."},
        { answer: "Another shot of morphine."},
        { answer: "Basic human decency."},
        { answer: "Beefin’ over turf."},
        { answer: "Being awesome at sex."},
        { answer: "Boris the Soviet Love Hammer."},
        { answer: "Bullshit."},
        { answer: "Catastrophic urethral trauma."},
        { answer: "Crushing Mr. Peanut’s brittle body."},
        { answer: "Daddy’s belt"},
        { answer: "Death by Steven Seagal."},
        { answer: "Dennis the Menace."},
        { answer: "Dining with cardboard cutouts of the cast of “Friends.”"},
        { answer: "Double penetration."},
        { answer: "Existing."},
        { answer: "Fetal alcohol syndrome."},
        { answer: "Finding Waldo."},
        { answer: "Fuck Mountain."},
        { answer: "Getting hilariously gang-banged by the Blue Man Group."},
        { answer: "Grandpa’s ashes."},
        { answer: "Graphic violence, adult language, and some sexual content."},
        { answer: "Hillary Clinton’s death stare."},
        { answer: "Intimacy problems."},
        { answer: "Jeff Goldblum."},
        { answer: "Living in a trashcan."},
        { answer: "Loki, the trickster god."},
        { answer: "Making a friend."},
        { answer: "Maximal insertion."},
        { answer: "Me."},
        { answer: "Mild autism."},
        { answer: "Mooing."},
        { answer: "My first kill."},
        { answer: "Nunchuck moves."},
        { answer: "Oncoming traffic."},
        { answer: "One Ring to rule them all."},
        { answer: "Power"},
        { answer: "Pretty Pretty Princess Dress-Up Board Game®."},
        { answer: "Pumping out a baby every nine months."},
        { answer: "Rising from the grave."},
        { answer: "Scrotal frostbite."},
        { answer: "Some really fucked-up shit."},
        { answer: "Special musical guest, Cher."},
        { answer: "Spring break!"},
        { answer: "Subduing a grizzly bear and making her your wife."},
        { answer: "Survivor’s guilt."},
        { answer: "Swiftly achieving orgasm."},
        { answer: "Taking a man’s eyes and balls out and putting his eyes where his balls go and then his balls in the eye holes."},
        { answer: "The black Power Ranger"},
        { answer: "The corporations."},
        { answer: "The day the birds attacked."},
        { answer: "The Google."},
        { answer: "The grey nutrient broth that sustains Mitt Romney."},
        { answer: "The human body."},
        { answer: "The mere concept of Applebee’s®."},
        { answer: "The mixing of the races."},
        { answer: "The new Radiohead album."},
        { answer: "Tiny nipples."},
        { answer: "Tongue."},
        { answer: "Upgrading homeless people to mobile hotspots."},
        { answer: "Weapons-grade plutonium."},
        { answer: "Wearing an octopus for a hat."},
        { answer: "Whining like a little bitch."},
        { answer: "Whipping a disobedient slave."}
      ];
    }
  };
}])
.factory('chatSocket', ['socketFactory', function(socketFactory){
  return socketFactory();
}])