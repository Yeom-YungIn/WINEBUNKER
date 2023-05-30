const express = require('express');
const searchController = require("../controller/searchController");

const router = express.Router();

router
     .get('/', searchController.search)
     .get('/modal', searchController.modal)


module.exports = router;
