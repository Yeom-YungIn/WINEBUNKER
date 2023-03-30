var express = require('express');
var router = express.Router();
const indexController = require("../controller/indexCotroller.js");
/* GET home page. */
// router.get('/', function(req, res, next) {
//   res.render('index', { title: 'Express'});
// });

router
    .get('/', indexController.findAll)
    .get('/:id', indexController.render)


module.exports = router;
