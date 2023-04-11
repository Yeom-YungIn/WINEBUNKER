const express = require('express');

const router = express.Router();
const indexController = require('../controller/indexCotroller.js');
/* GET home page. */
// router.get('/', function(req, res, next) {
//   res.render('index', { title: 'Express'});
// });

router
  .get('/', indexController.main)

module.exports = router;
