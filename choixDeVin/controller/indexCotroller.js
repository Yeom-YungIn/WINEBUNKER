const db = require('../models');

const index = '../views/src/pug/index.pug';

exports.main = async (req, res) => {
  const resource = await db.resource.findAll({
    attributes: ['id', 'vin', 'publisherId', 'issued'],
    limit: 10,
    include: [
      {
        model: db.vin,
        as: 'vinInfo',
        attributes: ['vinSn', 'vinName']
      }
    ]
  });
  res.render(index, { resource });
};

exports.render = (req, res) => {
  res.render('login', { title: req.header.id });
};
