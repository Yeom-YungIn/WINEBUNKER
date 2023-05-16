const db = require('../models');
const VinService = require("../service/VinService");
const search = '../views/src/pug/page/search.pug';

const vinService = new VinService(db);

exports.search = async (req, res) => {
  console.log(req.query.search)
  const vinName = req.query.search
  const vin = await vinService.findVinWhere(vinName, 0, 10);
  res.render(search, { vin })
};
