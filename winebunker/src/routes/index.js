const express = require('express');

const router = express.Router();
const indexController = require('../controller/indexCotroller.js');

router
    .get('/', indexController.resourceList)

module.exports = router;