const express = require('express');
const router = express.Router();

router.get('/myProfile', (req, res, next) => {
    const myProfile = require('../data/myprofile.json');
    res.status(200).send({
        myProfile
    });
});


router.get('/', (req, res, next) => {
    const index = require('../data/index.json');
    res.status(200).send({
        index
    });
});

router.get('/friendProfile', (req, res, next) => {
    const friendProfile = require('../data/friendProfile.json');
    res.status(200).send({
        friendProfile
    });
});

module.exports = router;