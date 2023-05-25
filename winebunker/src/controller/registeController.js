const db = require('../models');
const ResourceService = require("../service/ResourceService");
const ResourcePriceService = require("../service/ResourcePriceService");


const main = '../views/src/pug/main.pug';
const registe = '../views/src/pug/page/registration.pug';

const resourceService = new ResourceService(db);
const resourcePriceService = new ResourcePriceService(db);

exports.render = async (req, res) => {
  res.render(registe)
}

exports.registe = async (req, res) => {
  // console.log(req)
  // console.log(res)
  const transaction = db.sequelize.transactions
  try {
    const saveResource = await resourceService.saveResource(req.body, transaction)
    console.log(saveResource)
    const savePrice = await resourcePriceService.saveResourcePrice(saveResource.id, req.body, transaction)
    if (saveResource && savePrice) {
      await transaction.commit()
      res.render(registe)
    } else {
      throw new Error('Fail save resource')
    }
  } catch (e) {
    await transaction.rollback()
    return e;
  }
}
