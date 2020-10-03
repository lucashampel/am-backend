const express = require('express');
const router = express.Router();

router.get('/myProfile', (req, res, next) => {
  const myProfile = require('../data/myprofile.json');
  res.status(200).send({
    myProfile
  });
});

module.exports = router;