const db = require('../models');
const ResourceService = require('../service/ResourceService.js')
const main = '../views/src/pug/main.pug';


const resourceService = new ResourceService(db);


exports.resourceList = async (req, res) => {
  const resource = await resourceService.findAll(0, 10)
  res.render(main, { resource });
};
