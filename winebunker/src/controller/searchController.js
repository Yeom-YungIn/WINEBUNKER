const db = require('../models');

const search = '../views/src/pug/page/search.pug';

exports.search = async (req, res) => {
  console.log(req.query.search)
  const resource = await db.resource.findAll({
    attributes: ['id', 'vin', 'publisherId', 'issued'],
    include: [
      {
        model: db.vin,
        as: 'vinInfo',
        attributes: ['vinSn', 'vinName'],
        where: {'vin_name': req.query.search}
      },
    ]
  });

  res.render(search, { resource })
};
