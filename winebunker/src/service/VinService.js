const db = require("../models");

class VinService {
    constructor(db) {
        this.db = db
    }

    /**
     * Resource VIN 조건 조회
     * @param {string} vinName
     * @param {number} offset offset
     * @param {number} limit limit
     */
    async findVinWhere(vinName, offset, limit) {
        const findVinList = await this.db.vin.findAll({
            // attributes: ['vinSn','vinName'],
            offset: offset,
            limit: limit,
            include: [
                {
                    model: db.resource,
                    as: 'resource',
                    // attributes: ['id', 'vin', 'publisherId', 'issued'],
                    include: [
                        {
                            model: db.resourcePrice,
                            as: 'resourcePrice'
                        }
                    ]
                }
            ],
            where: {vinName: vinName}
        });
        return findVinList;
    }
}
module.exports = VinService;