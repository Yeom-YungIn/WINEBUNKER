const sequelize = require("../models/")
const resource = sequelize.resource
exports.main = (req, res) => {
    res.render('index', {title: 'Choix De Vin'})
};

exports.render = (req, res) => {
    res.render('login', {title: req.header.id})
};