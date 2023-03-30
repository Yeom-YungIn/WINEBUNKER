const sequelize = require("../models/")
const resource = sequelize.resource
exports.findAll = (req, res) => {
    res.render('index', {title: 'test'})
};

exports.render = (req, res) => {
    res.render('index', {title: req.header.id})
};