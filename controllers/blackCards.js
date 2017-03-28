var express = require('express');
var BlackCard = require('../models/blackCard');
var router = express.Router();

//get all the black cards
router.get('/', function(req, res){
  BlackCard.find(function(err, blackCards){
    if(err) return res.status(500).send(err);
    return res.send(blackCards);
  });
});

module.exports = router;
