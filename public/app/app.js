var app = angular.module('AuthApp', ['ui.router', 'AuthCtrls', 'CardsCtrls', 'ngStorage', 'ngLodash', 'ChatCtrls']);

app.config([
  '$stateProvider',
  '$urlRouterProvider',
  '$locationProvider',
  function($stateProvider, $urlRouterProvider, $locationProvider){
    $urlRouterProvider.otherwise('/404');

    $stateProvider
    .state('home', {
      url: '/:roomId',
      templateUrl: 'app/views/home.html',
      controller: 'JoinCtrl'
    })
    .state('main', {
    url:"/main",
    templateUrl: "app/views/main.html",
    controller: "CardsCtrl"
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
    .state('chat', {
      url:'/chat',
      templateUrl: 'app/views/chat.html',
      controller: 'JoinCtrl'
    })
    .state('main2', {
      url:'/main2/:roomId',
      templateUrl: 'app/views/main2.html',
      controller: 'MainCtrl'
    })

    $locationProvider.html5Mode(true);
  }])
  .config(["$httpProvider", function($httpProvider){
    $httpProvider.interceptors.push("AuthInterceptor");
  }]);
