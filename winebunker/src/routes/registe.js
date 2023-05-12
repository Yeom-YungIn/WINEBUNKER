const express = require('express');
const registeController = require("../controller/registeController");
const multer = require("multer")

const router = express.Router();

router
     .get('/', registeController.registe)

// router
    // .post('/',registeController.save)

module.exports = router;
