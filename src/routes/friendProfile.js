const express = require('express');
const router = express.Router();

router.get('/friendProfile', (req, res, next) => {
  const friendProfile = require('../data/friendProfile.json');
  res.status(200).send({
    friendProfile
  });
});

module.exports = router;