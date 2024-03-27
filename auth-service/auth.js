
const express = require('express');
const router = express.Router();
const jwt = require('jsonwebtoken');

const verifyToken = (req, res, next) => {
  const token = req.headers.authorization;
  if (!token) return res.status(403).json({ message: 'Token non fourni' });
  jwt.verify(token, 'secret_key', (err, decoded) => {
    if (err) return res.status(401).json({ message: 'Token invalide' });
    req.userId = decoded.id;
    next();
  });
};

router.get('/secure-route', verifyToken, (req, res) => {
  res.json({ message: 'Vous êtes authentifié' });
});

module.exports = router;
