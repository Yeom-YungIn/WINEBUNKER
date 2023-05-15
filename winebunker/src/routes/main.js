const express = require('express');
const router = express.Router();
const mainController = require('../controller/mainCotroller.js');

router
    .get('/', mainController.resourceList)

module.exports = router;