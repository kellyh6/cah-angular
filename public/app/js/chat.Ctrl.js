angular.module('ChatCtrls', ['Services'])
.controller('JoinCtrl', ['$location', '$scope', '$localStorage', 'socket', '$state', '$stateParams',  function($location, $scope, $localStorage, socket, $state, $stateParams){
  $scope.playerInput = '';
  $scope.playerList = [];
  $scope.nicknames = [];
  $scope.mynickname = '';
  var nickname;
  $scope.privateRoom = window.location.href;

  $scope.randomString = function() {
    var text = "";
    var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    for(var i = 0; i < 15; i++) {
        text += possible.charAt(Math.floor(Math.random() * possible.length));
    }
    return text;
  }

  $scope.createRoom = function() {
    var roomId = $scope.randomString();
    $location.path("/" + $scope.randomString());
  }

  socket.emit('get-users');
  socket.on('all-users', function(data){
    $scope.playerList = data;
    $scope.nicknames = [];
    data.forEach(function(d){
      $scope.nicknames.push(d.nickname);
    });
  });

  $scope.$watchCollection("playerList", function(newVal, oldVal){
    $scope.errorMessage = "";
    if(newVal.length < 3){
      $scope.errorMessage = "Need at least 3 players";
    } else if (newVal.length > 10){
      $scope.errorMessage = "Too many players";
    }
  });

  $scope.join = function(){
    if($scope.playerInput !==""){
      if($scope.nicknames.includes($scope.playerInput)){
        $scope.errorMessage = "Usernames must be unique";
      } else {
        nickname = $scope.playerInput;
        $localStorage.nickname = nickname;
        $scope.mynickname = $localStorage.nickname;
        socket.emit('join', {
          nickname: nickname,
          socketid: socket.id,
          room: $stateParams.roomId,
          host: false
        });
        $scope.playerInput = "";
      }
    }
    else {
      $scope.errorMessage = "Username can't be blank";
    }
  }

  $scope.startGame = function(){
    $location.path("/main/" + $stateParams.roomId);
    // $state.go("main2" + $stateParams.roomId);
  }

}])
.controller('MainCtrl', ['$scope', '$localStorage', 'socket', 'lodash', 'WhiteCardAPI', 'BlackCardAPI', '$stateParams', function($scope, $localStorage, socket, lodash, WhiteCardAPI, BlackCardAPI, $stateParams){
        $scope.message = '';
        $scope.messages = [];
        $scope.users = [];
        $scope.nicknames = [];
        $scope.likes = [];
        $scope.roundWinner = '';
        $scope.roundWinnerIndex = null;
        $scope.winnerSelected = false;
        $scope.czarPicking = false;
        $scope.whiteCards = [];
        $scope.blackCards = [];
        $scope.userCardsPicked = 0;
        $scope.blanks;
        $scope.selectedAnswer;
        $scope.submittedAnswers = [];
        $scope.blackCard = {};
        $scope.myCards = [];
        $scope.cardCzar = 0;
        $scope.cardCzarIndex = null;
        $scope.round = -1;
        // ROOMS ------ ADDED ROOM -> WORKING
        $scope.room = $stateParams.roomId
        // ****
        $scope.myscore = $localStorage.score || 0;
        $scope.mynickname = $localStorage.nickname;
        var nickname = $scope.mynickname;
        $localStorage.cards = [];

        socket.emit('get-users');
          socket.on('connection', function(socket){
            console.log("a user connected to " + $scope.room)
        })

        socket.on('all-users', function(data) {
            $scope.users = data;
            $scope.nicknames = [];
            data.forEach(function(d){
              $scope.nicknames.push(d.nickname);
            });
        });


        BlackCardAPI.getCards().then(function success(response){
          $scope.blackCards = response;
        }, function error(err){
          console.log(err);
        });

        socket.on('player-hands-received', function(data){
          var index = $scope.nicknames.indexOf($scope.mynickname);
          if($localStorage.cards){
            $localStorage.cards = $localStorage.cards.concat(data.playerCards[index]);
          } else {
            $localStorage.cards = data.playerCards[index];
          }
          $scope.myCards = $localStorage.cards;
          $scope.whiteCards = data.whiteCards;
          console.log("white cards length = " + $scope.whiteCards.length);
        });

        $scope.canSubmit = function(){
          if (!$scope.czarPicking && $scope.userCardsPicked !== $scope.blanks && $scope.blackCard.question && $scope.selectedAnswer) {
            return true;
          } else {
            return false
          }
        }


        $scope.drawBlackCard = function(){
          if($scope.cardCzar === 0){
            WhiteCardAPI.getCards().then(function success(response){
                var whiteCards = response;
                var playerCards = [];
                for(var i = 0; i < $scope.users.length;i++){
                  var hand = shuffleArray(whiteCards, 10);
                  playerCards.push(hand);
                }

                var obj = {
                  playerCards: playerCards,
                  whiteCards: whiteCards
                };

                socket.emit('send-player-hands', obj);
            }, function error(err){
                console.log(err);
            });
          } else {
            var playerCards = [];
            for(var i = 0; i < $scope.users.length; i++){
              var newCard = [];
              if($scope.cardCzar !== $scope.users[i].nickname){
                newCard = shuffleArray($scope.whiteCards, $scope.blanks);
              }
              playerCards.push(newCard);
            }

            var obj = {
              playerCards: playerCards,
              whiteCards: $scope.whiteCards
            };
            socket.emit('send-player-hands', obj);
          }

          var ind = pickCardIndex($scope.blackCards.length)
          var card = $scope.blackCards.splice(ind, 1)[0];
          czarIndex = $scope.cardCzarIndex;
          if($scope.cardCzar === 0 || $scope.cardCzar === $scope.users[$scope.users.length-1].nickname){
            czarIndex = 0;
          } else {
            czarIndex++;
          }
          card.cardCzar = $scope.users[czarIndex].nickname;
          card.cardCzarIndex = czarIndex;

          socket.emit('send-black-card', card);
          socket.emit('new-round');
        }

        socket.on('black-card-received', function(data){
          $scope.blackCard = data;
          $scope.userCardsPicked = 0;
          $scope.blanks = data.blanks;
          $scope.czarPicking = false;
          $scope.cardCzar = data.cardCzar;
          $scope.cardCzarIndex = data.cardCzarIndex;
        });

        socket.on('new-round-received', function(){
          //reset data
          $scope.round++;
          $scope.roundWinner = '';
          $scope.winnerSelected = false;
          $scope.roundWinnerIndex = null;
          $scope.submittedAnswers = [];
        });

        $scope.chooseCard = function(index) {
          if($scope.mynickname !== $scope.cardCzar){
            $scope.selectedAnswer = index;
          }
        }

        socket.on('message-received', function(data) {
          $scope.messages.unshift(data);
        });

        socket.on('user-liked', function(data) {
            console.log(data);
            $scope.likes.push(data.from);
        });

        $scope.sendMessage = function(data) {
          if($scope.message != "" && $scope.message){
            var newMessage = {
                message: $scope.message,
                from: $scope.mynickname,
                roomId: $scope.room
            };
            socket.emit('send-message', newMessage);
            $scope.message = '';
          }
        };

        $scope.submitAnswer = function() {
            if(!$scope.selectedAnswer.isNaN) {
              $scope.userCardsPicked = $scope.userCardsPicked + 1;
              var card = $scope.myCards[$scope.selectedAnswer];
              card.order = $scope.userCardsPicked;
              card.nickname = $scope.mynickname;
              socket.emit('send-card', card);
              $scope.myCards.splice($scope.selectedAnswer, 1)
              $scope.selectedAnswer = null;
          }
        }

         socket.on('card-received', function(data) {
          $scope.submittedAnswers.push(data);
        });

        $scope.$watchCollection('submittedAnswers', function(newAnswers, oldAnswers){
          if(newAnswers.length === (($scope.users.length-1) * $scope.blanks)){
            $scope.czarPicking = true;
          }
        });

        socket.on('answers-received', function(data){
          $scope.submittedAnswers = data.submittedAnswers;
        })

        $scope.chooseWinningcard = function(index){
          if($scope.mynickname === $scope.cardCzar){
            $scope.roundWinnerIndex = index;
            $scope.roundWinner = $scope.submittedAnswers[index].nickname;
          }
        }

        $scope.selectWinningAnswer = function(){
          if($scope.mynickname === $scope.cardCzar){
            if($scope.roundWinnerIndex !== null){
              var winner = {
                roundWinnerIndex: $scope.roundWinnerIndex,
                roundWinner: $scope.submittedAnswers[$scope.roundWinnerIndex].nickname,
                winnerSelected: true
              }
              socket.emit('send-winner', winner);
            }
          }
        }

        var findIndexOfWinner = function(winner){
          return $scope.users.findIndex(users => users.nickname === winner);
        }

        socket.on('winner-received', function(data){
          $scope.roundWinnerIndex = data.roundWinnerIndex;
          $scope.roundWinner = data.roundWinner;
          $scope.winnerSelected = data.winnerSelected;
          var index = findIndexOfWinner($scope.roundWinner)
          $scope.users[index].score = (($scope.users[index].score || 0 ) + 1)
          if($scope.roundWinner === $scope.mynickname){
            $scope.myscore++;
            $scope.localStorage = $scope.myscore;
          }
        });

        $scope.sendLike = function(user) {
            console.log(user);
            var id = lodash.get(user,'socketid');
            var likeObj = {
                from: nickname,
                like: id
            };
            socket.emit('send-like', likeObj);
        };

        function shuffleArray(arr, limit) {
            if(limit > arr.length) {
            limit = arr.length;
            }
            var shuffled = arr.sort(function() {
            return 0.5 - Math.random();
            });

            arr = shuffled;
            return arr.splice(0, limit);
        }

        function pickCardIndex(size){
          return Math.floor(Math.random() * size);
        }
}])
