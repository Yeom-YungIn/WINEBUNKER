const express = require('express');
const searchController = require("../controller/searchController");

const router = express.Router();

router
    .get('/', searchController.extract)
    .get('/extract', searchController.extract)

module.exports = router;
