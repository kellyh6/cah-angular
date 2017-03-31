var express = require('express');
var BlackCard = require('../models/blackCard');
var ObjectId = require('mongoose').Types.ObjectId;
var router = express.Router();

//get all the black cards
router.get('/', function(req, res){
  BlackCard.find(function(err, blackCards){
    if(err) return res.status(500).send(err);
    return res.send(blackCards);
  });
});

router.get('/:deckId', function(req, res){
  BlackCard.find({pack : req.params.deckId}, function(err, cards) {
    if (err) return res.status(500).send(err);
    return res.send(cards);
  });
});

router.post('/', function(req, res){
  BlackCard.create(req.body, function(err, blackCard){
    if (err) return res.status(500).send(err);
    return res.send(blackCard);
  });
});

router.put('/:cardId', function(req, res){
  BlackCard.findByIdAndUpdate(req.params.cardId, req.body, function(err){
    if(err) return res.status(500).send(err);
    return res.send({message: 'successful black card update'});
  });
});

router.delete('/:cardId', function(req, res){
  BlackCard.findByIdAndRemove(req.params.cardId, function(err){
    if (err) return res.status(500).send(err);
    return res.send({message: 'successful black card delete'});
  });
});

module.exports = router;
