require("dotenv").config();
var express = require('express');
var bodyParser = require('body-parser');
var path = require('path');
var PORT = process.env.PORT || 3000;


//JSON web token
var expressJWT = require('express-jwt');
var jwt = require('jsonwebtoken');
var secret = process.env.JWT_SECRET;


var app = express();
var server = require('http').Server(app);
var io = require('socket.io')(server);


//mongoose models and connection
var mongoose = require('mongoose');
var User = require('./models/user');
var WhiteCard = require('./models/whiteCard');
var BlackCard = require('./models/blackCard');
var Deck = require('./models/deck');

var users = [];

mongoose.connect('mongodb://localhost/cardsagainsthumanity');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));
app.use(require('morgan')('dev'));

app.use('/api/users', expressJWT({secret: secret}).unless({
  path: [{ url: '/api/users', methods: ['POST'] }]
}), require('./controllers/users'));
app.use('/api/blackCards', require('./controllers/blackCards'));
app.use('/api/whiteCards', require('./controllers/whiteCards'));
app.use('/api/decks', require('./controllers/decks'));

// this middleware will check if expressJWT did not authorize the user, and return a message
app.use(function (err, req, res, next) {
  if (err.name === 'UnauthorizedError') {
    res.status(401).send({ message: 'You need an authorization token to view this information.' });
  }
});

//io stuff
io.on('connection', function(socket){
  console.log('a user connected');

  //new user
  socket.on('join', function(data){
      console.log(data);
      console.log(users);
      //User name
      socket.nickname = data.nickname;
      users[socket.nickname] = socket; 
      var userObj = {
        nickname: data.nickname,
        socketid: socket.id
    };

    users.push(userObj);
    io.emit('all-users', users);
  });

  socket.on('send-message', function(data) {
      //socket.broadcast.emit('message-received', data);
      io.emit('message-received', data);
  });

  socket.on('send-black-card', function(data){
    io.emit('black-card-received', data);
  });

  socket.on('disconnect', function(){
    console.log("user disconnected");
  });

  socket.on('send-card', function(data){
    io.emit('card-received', data);
  })

});




// POST /api/auth - if authenticated, return a signed JWT
app.post('/api/auth', function(req, res) {
  User.findOne({ email: req.body.email }, function(err, user) {
    // return 401 if error or no user
    if (err || !user) return res.status(401).send({ message: 'User not found' });

    // attempt to authenticate a user
    var isAuthenticated = user.authenticated(req.body.password);
    // return 401 if invalid password or error
    if (err || !isAuthenticated) return res.status(401).send({ message: 'User not authenticated' });

    // sign the JWT with the user payload and secret, then return
    var token = jwt.sign(user.toJSON(), secret);

    return res.send({ user: user, token: token });
  });
});


app.get('/*', function(req, res) {
  res.sendFile(path.join(__dirname, 'public/index.html'));
});
io.on('connection', function(socket){
  console.log("A user has connected")
  socket.on("disconnect", function(){
    console.log("a user has disconnected");
  })
})


server.listen(process.env.PORT || 3000, function() {
  console.log("hey server");
});
// server = app.listen(process.env.PORT || 3000);

module.exports = app;
