var express = require('express');
var Deck = require('../models/deck');
var router = express.Router();

//all decks
router.get('/', function(req, res){
  Deck.find(function(err, decks){
    if(err) return res.status(500).send(err);
    return res.send(decks);
  });
});

//deck w/ all cards

//all users decks


module.exports = router;
