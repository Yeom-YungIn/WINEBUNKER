const express = require('express');
const registeController = require("../controller/registeController");
const multer = require("multer")

const router = express.Router();

router
    .post('/',registeController.registe)

module.exports = router;
