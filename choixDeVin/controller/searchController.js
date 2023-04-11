const db = require('../models');

const index = '../views/src/pug/index.pug';

exports.search = async (req, res) => {
  console.log(req.query.search)
  res.send('AAAAAAAAAAAAAAAA' + req.query.search)
};
