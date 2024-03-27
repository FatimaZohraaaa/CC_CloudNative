const express = require('express');
const router = express.Router();

router.get('/activites', (req, res) => {
  res.json({ message: 'Liste des activités' });
});

module.exports = router;
