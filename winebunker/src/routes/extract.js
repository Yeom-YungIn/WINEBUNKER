const express = require('express');
const extractController = require("../controller/extractController");
const multer = require("multer")
const upload = multer();

const router = express.Router();

router
     .get('/', extractController.extract)

router
    .post("/", upload.single("image"), extractController.extract)

router
    .post("/post", extractController.test)

module.exports = router;
