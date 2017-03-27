var express = require('express');
var WhiteCard = require('../models/whiteCard');
var router = express.Router();

//get all the white cards
router.get('/', function(req, res){
  WhiteCard.find(function(err, whiteCards){
    if(err) return res.status(500).send(err);
    return res.send(whiteCards);
  });
});

module.exports = router;
