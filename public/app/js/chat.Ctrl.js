angular.module('ChatCtrls', [])
.controller('JoinCtrl', ['$location', '$scope', '$localStorage', 'socket',  function($location, $scope, $localStorage, socket){
  $scope.name = '';
  var nickname;

  $scope.join = function(){
    nickname = $scope.name;
    $localStorage.nickname = nickname;

    socket.emit('join', {
      nickname: nickname
    });

    $location.path('/main2')
  } 
}])
.controller('MainCtrl', ['$scope', '$localStorage', 'socket', 'lodash', function($scope, $localStorage, socket, lodash){
        $scope.message = '';
        $scope.messages = [];
        $scope.users = [];
        $scope.likes = [];
        $scope.mynickname = $localStorage.nickname;
        var nickname = $scope.mynickname;

        socket.emit('get-users');

        socket.on('all-users', function(data) {
            console.log(data);
            $scope.users = data.filter(function(item){
                return item.nickname !== nickname;
            });
        });

        socket.on('message-received', function(data) {
          $scope.messages.push(data);
        });

        socket.on('user-liked', function(data) {
            console.log(data);
            $scope.likes.push(data.from);
        });

        $scope.sendMessage = function(data) {
            var newMessage = {
              message: $scope.message,
              from: $scope.mynickname
          };
          socket.emit('send-message', newMessage);
            $scope.message = '';
            //$scope.messages.push(newMessage);
        };

        $scope.sendLike = function(user) {
            console.log(user);
            var id = lodash.get(user,'socketid');
            var likeObj = {
                from: nickname,
                like: id
            };
            socket.emit('send-like', likeObj);
        };
}])

