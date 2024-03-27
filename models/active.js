const mongoose = require('mongoose');

const activeSchema = new mongoose.Schema({
  nom: String,
  description: String,
  lieu: String,
  date: Date,
});

module.exports = mongoose.model('active', activeSchema);
