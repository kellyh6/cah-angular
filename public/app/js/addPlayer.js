var app = angular.module('AuthApp'); 

app.controller('AlertsCtrl', function($scope) {
    $scope.playerList = [];

    $scope.playerAdd = function() {
        $scope.playerList.push({playerText:$scope.playerInput, done:false});
        $scope.playerInput = "";
        console.log($scope.playerList);
    };

    // $scope.remove = function() {
    //     var oldList = $scope.playerList;
    //     $scope.playerList = [];
    //     angular.forEach(oldList, function(x) {
    //         if (!x.done) $scope.playerList.push(x);
    //     });
    // };
})