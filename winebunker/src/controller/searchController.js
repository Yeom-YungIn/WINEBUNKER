const db = require('../models');
const ResourceService = require("../service/ResourceService");
const search = '../views/src/pug/page/search.pug';

const resourceService = new ResourceService(db);

exports.search = async (req, res) => {
  console.log(req.query.search)
  const vinName = req.query.search
  const resource = await resourceService.findResourceByName(vinName, 0, 10);
  res.render(search, { resource })
};

exports.modal = async (req, res) => {
  const vinName = req.query.search
  const vin = await vinService.findAllVin(vinName, 0, 10);
  res.send(vin)
};