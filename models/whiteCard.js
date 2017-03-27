var mongoose = require('mongoose');

var WhiteCardSchema = mongoose.Schema({
  answer: {
    type: String,
    required: true,
    unique: true
  },
  pack: {
    type: String
  }
});

module.exports = mongoose.model('WhiteCard', WhiteCardSchema);
