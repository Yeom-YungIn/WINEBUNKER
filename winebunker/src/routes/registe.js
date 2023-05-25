const express = require('express');
const registeController = require("../controller/registeController");
const router = express.Router();

router
    .get('/',registeController.render)

router
    .post('/',registeController.registe)

module.exports = router;
