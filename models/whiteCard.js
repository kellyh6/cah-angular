var mongoose = require('mongoose');

var WhiteCardSchema = mongoose.Schema({
  answer: {
    type: String,
    required: true,
    unique: true
  },
  pack: {
    type: mongoose.Schema.Types.ObjectId, ref: 'Deck'
  }
});

module.exports = mongoose.model('WhiteCard', WhiteCardSchema);
