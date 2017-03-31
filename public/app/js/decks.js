angular.module('DeckCtrls', ['Services'])
.controller('DeckCtrl', ['$scope', 'BlackCardAPI', 'DeckAPI', 'WhiteCardAPI', 'Auth', function($scope, BlackCardAPI, DeckAPI, WhiteCardAPI, Auth){
  $scope.decks = [];
  $scope.deckId = '';
  $scope.blackCards = [];
  $scope.whiteCards = [];
  $scope.myCards = {};

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

  if (Auth.isLoggedIn()){
    WhiteCardAPI.getMyCards().then(function success(res){
      $scope.myCards.whiteCards = res;
    }, function error(err){
      console.log("Error in myCards", err)
    })
    BlackCardAPI.getMyCards().then(function success(res){
      $scope.myCards.blackCards = res;
    }, function error(err){
      console.log("Error in myCards", err)
    })
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
