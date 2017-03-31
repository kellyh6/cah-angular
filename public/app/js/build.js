angular.module('BuildCtrls', [])

.controller('BuildCtrl', function($scope) {
    $scope.createBlackCard = "";
    $scope.frontBlack = true;
    $scope.backBlack = false;
    $scope.frontWhite = true;
    $scope.backWhite = false;
    $scope.radiobtn = 1;
    $scope.customBlack = {
    	question: '',
    	blanks: 0
    };
    $scope.customWhite = {
    	answer: ''
    };

    $scope.togglefrontBlack = function() {
        $scope.frontBlack = !$scope.frontBlack
        $scope.backBlack = false;
      }
    $scope.togglebackBlack = function() {
        $scope.backBlack = !$scope.backBlack
        $scope.frontBlack = false;
    }
    //black card preview button
    $scope.update = function(blackCard, num) {
    	console.log(blackCard, num);
    	$scope.customBlack.question = blackCard;
     	$scope.customBlack.blanks = num;
  	};
  	//black card submit button
  	$scope.createcustomBlack = function() {
  		// No put values for $scope.customBlack in your cards database
  		//yup
    	console.log($scope.customBlack);
  	};

  	$scope.togglefrontWhite = function() {
        $scope.frontWhite = !$scope.frontWhite
        $scope.backWhite = false;
      }
    $scope.togglebackWhite = function() {
        $scope.backWhite = !$scope.backWhite
        $scope.frontWhite = false;
    }
    //white card preview button
  	$scope.create = function(whiteCard) {
  		console.log(whiteCard);
  		$scope.customWhite.answer = whiteCard;
  	}; 
  	//white card submitt button
  	$scope.createcustomWhite = function() {	
  		console.log($scope.customWhite);
  		};
    
	});

















