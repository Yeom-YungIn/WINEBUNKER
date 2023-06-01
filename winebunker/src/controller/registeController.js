const db = require('../models');
const ResourceService = require("../service/ResourceService");
const ResourcePriceService = require("../service/ResourcePriceService");
const {v4: uuidv4} = require("uuid");

const registe = '../views/src/pug/page/registration.pug';
const registe2 = '../views/src/pug/page/registration2.pug';

const resourceService = new ResourceService(db);
const resourcePriceService = new ResourcePriceService(db);

exports.render = async (req, res) => {
  res.render(registe)
}

exports.registe = async (req, res) => {
  console.log(req.body)
  const transaction = await db.sequelize.transaction();
  try {
    const saveResource = await resourceService.saveResource(req.body, transaction)
    const savePrice = await resourcePriceService.saveResourcePrice(saveResource.id, req.body, transaction)
    if (saveResource && savePrice) {
      await transaction.commit()
      res.render(registe2)
    } else {
      throw new Error('Fail save resource')
    }
  } catch (e) {
    await transaction.rollback()
    return e;
  }
}
