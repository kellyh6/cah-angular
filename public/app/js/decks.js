angular.module('DeckCtrls', ['Services'])
.controller('DeckCtrl', ['$scope', 'BlackCardAPI', 'DeckAPI', 'WhiteCardAPI', function($scope, BlackCardAPI, DeckAPI, WhiteCardAPI){
  $scope.decks = [];
  $scope.deckId = '';
  $scope.blackCards = [];
  $scope.whiteCards = [];

  DeckAPI.getDecks().then(function success(response){
    $scope.decks = response;
  }, function error(err){
    console.log(err);
  });

  BlackCardAPI.getCards().then(function success(response){
    $scope.blackCards = response;
    WhiteCardAPI.getCards().then(function success(response2){
        $scope.whiteCards = response2;
    }, function error(err){
      console.log(err);
    })
  }, function error(err){
    console.log(err);
  });

  $scope.getCardsFromManyDecks = function(){
    var deckIds = [];
    $scope.decks.forEach(function(d) {
        if (d.selected) {
        deckIds.push(d._id);
      }
    });

    BlackCardAPI.getCardsFromManyDecks(deckIds).then(function success(response){
      $scope.blackCards = response;
    }, function error(err){
      console.log(err);
    });

    WhiteCardAPI.getCardsFromManyDecks(deckIds).then(function success(response){
      $scope.whiteCards = response;
    }, function error(err){
      console.log(err);
    });
  }

  $scope.getCards = function(){
    $scope.blackCards = [];
    $scope.whiteCards = [];
    BlackCardAPI.getCardsFromManyDecks($scope.deckId).then(function success(response){
      $scope.blackCards = response;
    }, function error(err){
      console.log(err);
    });

    WhiteCardAPI.getCardsFromManyDecks($scope.deckId).then(function success(response){
      $scope.whiteCards = response;
    }, function error(err){
      console.log(err);
    });
  }

}])
