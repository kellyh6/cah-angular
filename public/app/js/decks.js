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

  $scope.getCards = function(){
    $scope.blackCards = [];
    $scope.whiteCards = [];
    BlackCardAPI.getCardsFromDeck($scope.deckId).then(function success(response){
      $scope.blackCards = response;
    }, function error(err){
      console.log(err);
    });

    WhiteCardAPI.getCardsFromDeck($scope.deckId).then(function success(response){
      $scope.whiteCards = response;
    }, function error(err){
      console.log(err);
    });
  }

}])
