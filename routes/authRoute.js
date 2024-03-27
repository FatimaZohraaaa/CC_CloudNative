const express = require('express');
const router = express.Router();
const jwt = require('jsonwebtoken');
const Utilisateur = require('../models/utilisateur');

//7
router.post('/login', async (req, res) => {
  const { login, mdp } = req.body;
  try {
    const utilisateur = await Utilisateur.findOne({ login, mdp });
    if (!utilisateur) {
      return res.status(401).json({ message: 'Identifiants incorrects' });
    }
    const token = jwt.sign({ id: utilisateur._id }, 'secret_key');
    res.json({ token });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

module.exports = router;
