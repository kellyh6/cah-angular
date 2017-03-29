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

router.post('/', function(req, res){
  WhiteCard.create(req.body, function(err, whiteCard){
    if (err) return res.status(500).send(err);
    return res.send(whiteCard);
  });
});

router.put('/:cardId', function(req, res){
  WhiteCard.findByIdAndUpdate(req.params.cardId, req.body, function(err){
    if (err) return res.status(500).send(err);
    return res.send({message: 'successful white card update'});
  });
});

router.delete('/:cardId', function(req, res){
  WhiteCard.findByIdAndRemove(req.params.cardId, function(err) {
    if (err) return res.status(500).send(err);
    return res.send({message: 'successful white card delete'});
  });
});

module.exports = router;
