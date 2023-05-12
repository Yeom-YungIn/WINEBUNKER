const db = require("../models");

class ResourceService {
    constructor(db) {
        this.db = db
    }

    async findList() {
        const resource = await this.db.resource.findAll({
            attributes: ['id', 'vin', 'publisherId', 'issued'],
            limit: 10,
            include: [
                {
                    model: db.vin,
                    as: 'vinInfo',
                    attributes: ['vinSn', 'vinName']
                }
            ]
        });
        return resource;
    }

    render(req, res) {
        console.log('render');
    }
}

module.exports = ResourceService;
