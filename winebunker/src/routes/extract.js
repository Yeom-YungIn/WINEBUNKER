const express = require('express');
const extractController = require("../controller/extractController");

const router = express.Router();

router
     .get('/', extractController.extract)

router
    .post('/', extractController.extract)

module.exports = router;
