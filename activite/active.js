const mongoose = require('mongoose');

const activeSchema = new mongoose.Schema({
  utilisateur_id: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'auth', 
    required: true
  },
  tache_id: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'tache', 
    required: true
  }
});

const active = mongoose.model('active', activeSchema);

module.exports = Active;
