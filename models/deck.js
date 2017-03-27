var mongoose = require('mongoose');

var DeckSchema = mongoose.Schema({
  whiteCards: [
    {
      type: mongoose.Schema.Types.ObjectId, ref: 'WhiteCard'
    }
  ],
  blackCards: [
    {
      type: mongoose.Schema.Types.ObjectId, ref: 'BlackCard'
    }
  ]
});

module.exports = mongoose.model('Deck', DeckSchema);
