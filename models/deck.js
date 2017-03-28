var mongoose = require('mongoose');

var DeckSchema = mongoose.Schema({
  name: String,
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
