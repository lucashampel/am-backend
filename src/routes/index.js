const express = require('express');
const router = express.Router();

router.get('/', (req, res, next) => {
  const index = require('../data/index.json');
  res.status(200).send({
    index
  });
});

module.exports = router;