const db = require('../models');
const ResourceService = require("../service/ResourceService");

const main = '../views/src/pug/main.pug';
const registe = '../views/src/pug/page/registration.pug';

const resourceService = new ResourceService(db);

exports.render = async (req, res) => {
  res.render(registe)
}

exports.registe = async (req, res) => {
  console.log(req.body)
  // console.log(res)
  const transaction = db.sequelize.transactions
  try {
    const saveResource = await resourceService.saveResource(req, transaction)
    console.log(saveResource)
    if (saveResource) {
      await transaction.commit()
      res.render(registe)
    } else {
      throw new Error('Fail save resource')
    }
  } catch (e) {
    // await transaction.rollback()
    return e;
  }
}
