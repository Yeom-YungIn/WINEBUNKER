const db = require('../models');
const ResourceService = require("../service/ResourceService");

const main = '../views/src/pug/main.pug';
const registe = '../views/src/pug/page/registration.pug';

const resourceService = new ResourceService(db);

exports.registe = async (req, res) => {
  console.log('11111111')
  res.render(registe)
}
