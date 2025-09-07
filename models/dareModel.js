const mongoose = require('mongoose');

const GameItemSchema = new mongoose.Schema({
  text: {
    type: String,
    required: true
  },
  category: {
    type: String,
    required: true
  }
});

module.exports = mongoose.model('Dare', GameItemSchema);
