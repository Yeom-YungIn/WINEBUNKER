const sequelize = require("../models/")
const index = '../views/src/pug/index.pug'
exports.main = (req, res) => {
    res.render(index)
};

exports.render = (req, res) => {
    res.render('login', {title: req.header.id})
};