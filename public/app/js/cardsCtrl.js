angular.module('CardsCtrls', ['Services'])
.controller('CardsCtrl', ['$scope', "BlackCardAPI", "WhiteCardAPI", "sharedProperties", function($scope, BlackCardAPI, WhiteCardAPI, sharedProperties) {
  $scope.blackCards = [];
  $scope.whiteCards = [];
  $scope.displayCard = {};
  $scope.errorMessage = "";
  var CARDS_PER_PLAYER = 2;
  var MAX_ROUNDS = 5;
  $scope.playerCards = []; //[["card1", "card2"], ["card1", "card2"], ["card1", "card2"]]
  $scope.playerList = sharedProperties.getPlayerList();
  $scope.selectedAnswers = {};
  $scope.pot = {};
  $scope.czarPicking = false;
  $scope.cardCzar = 0;
  $scope.points = [];
  $scope.round = 0;

  BlackCardAPI.getCards().then(function success(response){
    $scope.blackCards = response;
    $scope.displayCard = $scope.blackCards[pickCardIndex($scope.blackCards.length)];
  }, function error(err){
    console.log(err);
  });

// FIND MAX OF ARRAY METHOD
  Array.prototype.max = function() {
    return Math.max.apply(null, this);
  };

  $scope.numPlayers = sharedProperties.getNumPlayers();

  // Initialize points array
  if($scope.points.length === 0) {
    for (var i = 0; i < $scope.numPlayers; i++) {
        $scope.points.push(0);
      }
  }

  WhiteCardAPI.getCards().then(function success(response){
    $scope.whiteCards = response;
    for (i = 0; i < $scope.numPlayers; i++) {
      $scope.playerCards.push(shuffleArray($scope.whiteCards, CARDS_PER_PLAYER));
    }
  }, function error(err){
    console.log(err);
  });

  $scope.$watchCollection('selectedAnswers', function(newAnswers, oldAnswers) {
    if(Object.keys(newAnswers).length === $scope.numPlayers-1){
      $scope.czarPicking = true;
      //pop pot
      for(var key in newAnswers){
        $scope.pot[key] = $scope.playerCards[key].splice($scope.playerCards[key].indexOf(newAnswers[key]),1)[0];
        var newCard = shuffleArray($scope.whiteCards, 1)[0];
        $scope.playerCards[key].push(newCard);
      }
    }
  });

  $scope.selectAnswers = function(playerIndex, card) {
    if(playerIndex != $scope.cardCzar){
      $scope.selectedAnswers[playerIndex] = card;
    }
  };

  $scope.selectWinningAnswer = function(playerIndex) {
      $scope.selectedAnswers = {};
      $scope.points[playerIndex]++;
      $scope.pot = {};
      $scope.czarPicking = false;
      if ($scope.cardCzar == $scope.numPlayers - 1){
        $scope.cardCzar = 0;
      } else {
        $scope.cardCzar++
      }

      var index = pickCardIndex($scope.blackCards.length);
      $scope.displayCard = $scope.blackCards[index];
      $scope.blackCards.splice(index,1);
      $scope.round++;
      $scope.checkWin();
  }

  $scope.checkWin = function() {
    if ($scope.round >= MAX_ROUNDS) {
      var winner =  $scope.points.max();
      alert($scope.playerList[$scope.points.indexOf(winner)] + " won!")
    }
  }


}])

function pickCardIndex(size){
  return Math.floor(Math.random() * size);
}

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
