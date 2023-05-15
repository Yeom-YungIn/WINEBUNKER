const mainRouter = require("./main");
const searchRouter = require("./search");
const extractRouter = require("./extract");
const registeRouter = require("./registe");

module.exports.route = (app) => {
    app.use('/', mainRouter);
    app.use('/search', searchRouter);
    app.use('/extract', extractRouter);
    app.use('/registe', registeRouter);
}