const db = require('../models');
const ResourceService = require("../service/ResourceService");

const main = '../views/src/pug/main.pug';
const registe = '../views/src/pug/page/registration.pug';

const resourceService = new ResourceService(db);

exports.registe = async (req, res) => {
  console.log(req.data)
  const transaction = db.transaction()
  try {
    const saveResource = await resourceService.saveResource(req, res, transaction)
    transaction.commit()
  } catch (e) {
    transaction.rollback()
    return e;
  }
  res.render(registe)
}
