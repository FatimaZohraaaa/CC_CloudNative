const express = require('express');
const router = express.Router();
const Tache = require('../models/tache');

//8
router.post('/taches', async (req, res) => {
  try {
    const tache = await Tache.create(req.body);
    res.status(201).json(tache);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

//9
router.get('/taches/:id', async (req, res) => {
  try {
    const tache = await Tache.findById(req.params.id);
    if (tache) {
      res.json(tache);
    } else {
      res.status(404).json({ message: 'Tache non trouvée' });
    }
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

module.exports = router;
