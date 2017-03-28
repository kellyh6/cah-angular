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
.factory('chatSocket', ['socketFactory', function(socketFactory){
  return socketFactory();
}])
.service("sharedProperties", function(){
  var numPlayers = 3;
  var playerList = ["player 1", "player 2", "player 3"];

  return {
    getNumPlayers: function() {
      return numPlayers;
    },
    setNumPlayers: function(value) {
      numPlayers = value;
    },
    getPlayerList: function() {
      return playerList;
    },
    setPlayerList: function(value){
      playerList = value;
    }
  };
})
