const db = require('../models');

const search = '../views/src/pug/page/search.pug';

exports.search = async (req, res) => {
  console.log(req.query.search)
  res.render(search)
};
