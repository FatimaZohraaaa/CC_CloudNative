const express = require('express');
const router = express.Router();
const Activite = require('../models/activite');
const Utilisateur = require('../models/utilisateur');
const Tache = require('../models/tache');

router.post('/activites', async (req, res) => {
  const { utilisateur_id, tache_id, nom, description, lieu, date } = req.body;
  try {
    const utilisateurExists = await Utilisateur.exists({ _id: utilisateur_id });
    if (!utilisateurExists) {
      return res.status(404).json({ message: 'L\'utilisateur spécifié n\'existe pas' });
    }
    const tacheExists = await Tache.exists({ _id: tache_id });
    if (!tacheExists) {
      return res.status(404).json({ message: 'La tâche spécifiée n\'existe pas' });
    }
    const activite = await Activite.create({ utilisateur_id, tache_id, nom, description, lieu, date });
    res.status(201).json(activite);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

module.exports = router;
