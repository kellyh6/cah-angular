angular.module('AuthCtrls', ['Services'])
.controller('NavCtrl', ['$scope', 'Auth', '$location', 'Alerts', function($scope, Auth, $location, Alerts){
  $scope.isLoggedIn = function(){
    return Auth.isLoggedIn();
  };

  $scope.logout = function() {
    console.log("before logout", Auth.getToken());
    Auth.removeToken();
    console.log("After logout", Auth.getToken());
    Alerts.add("success", "You are now logged out");
    $location.path("/login");
  };

}])
.controller('SignupCtrl', ['$scope', '$http', '$location', function($scope, $http, $location){
  $scope.user = {
    email: '',
    password: ''
  };

  $scope.userSignup = function() {
    $http.post("/api/users", $scope.user).then(function success(res){
      $location.path("/");
    }, function error(res){
      console.log("error", res);
    });
  };
}])
.controller('LoginCtrl', ['$scope', '$http', '$location', 'Auth', 'Alerts', function($scope, $http, $location, Auth, Alerts){
  $scope.user = {
    email: '',
    password: ''
  };

  $scope.userLogin = function(){
    $http.post('/api/auth', $scope.user).then(function success(res){
      Auth.saveToken(res.data.token);
      Alerts.add("success", "You are now logged in as " + res.data.user.email);
      console.log("you logged in");
      $location.path("/");
    }, function error(res){
      console.log("error", res);
    });
  };
}])
.controller('AlertsCtrl', ['$scope', 'Alerts', 'sharedProperties', function($scope, Alerts, sharedProperties){
  $scope.alerts = Alerts.get();
  $scope.playerList = [];

  $scope.playerAdd = function() {
      $scope.playerList.push($scope.playerInput);
      $scope.playerInput = "";
  };

  $scope.assignAnswers = function() {
    sharedProperties.setNumPlayers($scope.playerList.length);
    sharedProperties.setPlayerList($scope.playerList);
  };

  $scope.$watchCollection("playerList", function(newVal, oldVal){
    $scope.errorMessage = "";
    if(newVal.length < 3){
      $scope.errorMessage = "Need at least 3 players";
    } else if (newVal.length > 10){
      $scope.errorMessage = "Too many players";
    }
  });


}]);
