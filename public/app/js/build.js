angular.module('BuildCtrls', [])

.controller('BuildCtrl', function($scope) {
    $scope.createBlackCard = "";
    $scope.frontBlack = true;
    $scope.backBlack = false;
    $scope.frontWhite = true;
    $scope.backWhite = false;

    $scope.togglefrontBlack = function() {
        $scope.frontBlack = !$scope.frontBlack
        $scope.backBlack = false;
      }
      $scope.togglebackBlack = function() {
        $scope.backBlack = !$scope.backBlack
        $scope.frontBlack = false;
    }
    $scope.update = function(blackCard) {
    	// $scope.blackCard.push();
    	// $scope.blackCard = "";	
    	//function call. this will call the flip function whenever update gets called
    console.log('in the update',blackCard);
  	};
  	$scope.togglefrontWhite = function() {
        $scope.frontWhite = !$scope.frontWhite
        $scope.backWhite = false;
      }
      $scope.togglebackWhite = function() {
        $scope.backWhite = !$scope.backWhite
        $scope.frontWhite = false;
    }
  	$scope.create = function(whiteCard) {
  		console.log(whiteCard);
  		// $scope.whiteCard = "";
  	}; 

});

