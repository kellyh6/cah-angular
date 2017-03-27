var mongoose = require('mongoose');

var BlackCardSchema = mongoose.Schema({
  question: {
    type: String,
    required: true,
    unique: true
  },
  blanks: {
    type: Number,
    required: true
  },
  pack: {
    type: String
  }
});

module.exports = mongoose.model('BlackCard', BlackCardSchema);
