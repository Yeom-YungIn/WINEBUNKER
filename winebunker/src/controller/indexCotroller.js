const db = require('../models');
const ResourceService = require('../service/ResourceService.js')
const index = '../views/src/pug/index.pug';


const resourceService = new ResourceService(db);


exports.resourceList = async (req, res) => {
  const resource = await resourceService.findList(req)

  res.render(index, { resource });
};

exports.render = (req, res) => {
  console.log('render');
};
