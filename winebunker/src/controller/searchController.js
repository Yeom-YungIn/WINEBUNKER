const db = require('../models');
const VinService = require("../service/VinService");
const search = '../views/src/pug/page/search.pug';

const vinService = new VinService(db);

exports.search = async (req, res) => {
  console.log(req.query.search)
  const vinName = req.query.search
  const vin = await vinService.findAllVinwithResource(vinName, 0, 10);
  res.render(search, { vin })
};

exports.modal = async (req, res) => {
  const vinName = req.query.search
  // console.log(vinName)
  const vin = await vinService.findAllVin(vinName, 0, 10);
  console.log(vin)
  res.send(vin)
};