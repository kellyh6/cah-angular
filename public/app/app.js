var app = angular.module('AuthApp', ['ui.router', 'AuthCtrls', 'CardsCtrls', 'ngStorage', 'ngLodash', 'ChatCtrls', 'BuildCtrls']);

app.config([
  '$stateProvider',
  '$urlRouterProvider',
  '$locationProvider',
  function($stateProvider, $urlRouterProvider, $locationProvider){
    $urlRouterProvider.otherwise('/404');

    $stateProvider
    .state('home', {
      url: '/',
      templateUrl: 'app/views/home.html',
      controller: 'JoinCtrl'
    })
    .state('build', {
      url: '/build',
      templateUrl: 'app/views/build.html',
      controller: 'BuildCtrl'
    })
    .state('join', {
      url: '/:roomId',
      templateUrl: 'app/views/join.html',
      controller: 'JoinCtrl'
    })
    .state('signup', {
      url:'/signup',
      templateUrl: 'app/views/userSignup.html',
      controller: 'SignupCtrl'
    })
    .state('login', {
      url:'/login',
      templateUrl: 'app/views/userLogin.html',
      controller: 'LoginCtrl'
    })
    .state('404', {
      url: '/404',
      templateUrl: 'app/views/404.html'
    })
    .state('main', {
      url:'/main/:roomId',
      templateUrl: 'app/views/main2.html',
      controller: 'MainCtrl'
    })

    $locationProvider.html5Mode(true);
  }])
  .config(["$httpProvider", function($httpProvider){
    $httpProvider.interceptors.push("AuthInterceptor");
  }]);
