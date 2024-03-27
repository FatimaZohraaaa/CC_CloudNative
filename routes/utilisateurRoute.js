const express = require('express');
const router = express.Router();
const Utilisateur = require('../models/utilisateur');

//6
router.post('/utilisateurs', async (req, res) => {
  try {
    const utilisateur = await Utilisateur.create(req.body);
    res.status(201).json(utilisateur);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});


//11
router.get('/utilisateurs/:login', async (req, res) => {
  try {
    const utilisateur = await Utilisateur.findOne({ login: req.params.login });
    if (utilisateur) {
      res.json({ exists: true });
    } else {
      res.json({ exists: false });
    }
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

module.exports = router;
