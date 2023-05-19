const db = require("../models");

class ResourceService {
    constructor(db) {
        this.db = db
    }

    /**
     * Resource 리스트 조회
     * @param {number} offset offset
     * @param {number} limit  limit
     */
    async findAll (offset, limit) {
        const resource = await this.db.resource.findAll({
            // attributes: ['id', 'vin', 'publisherId', 'issued'],
            offset: offset,
            limit: limit,
            order: [['issued', 'desc']],
            include: [
                {
                    model: db.vin,
                    as: 'vinInfo',
                    // attributes: ['vinSn', 'vinName']
                },
                {
                    model: db.resourcePrice,
                    as: 'resourcePrice',
                    // attributes: ['vinSn', 'vinName']
                }
            ]
        });
        return resource;
    }

    /**
     * Resource 리스트 조건 조회
     * @param {string} vinName
     * @param {number} offset offset
     * @param {number} limit limit
     */
    async findWhere (vinName, offset, limit) {
        const resource = await this.db.resource.findAll({
            // attributes: ['id', 'vin', 'publisherId', 'issued'],
            offset: offset,
            limit: limit,
            order: [['issued', 'desc']],
            include: [
                {
                    model: db.vin,
                    as: 'vinInfo',
                    // attributes: ['vinSn', 'vinName'],
                    where: {vinName: vinName}
                }
            ]
        });
        return resource;
    }
    
    /**
     * Resource 등록
     */
    async saveResource(req, res, transaction) {
        const saveResource = await this.db.resource.save({
            id: req.id,
            publisherId: req.publisherId,
            vin: req.vin,
            purchaseDate: req.purchaseDate,
            capacity: req.capacity,
            issued: Date.now()
        },
            transaction)
    }

    /**
     * Resource 삭제
     */
    async removeResource(req, res, next) {
        const saveResource = await this.db.resource.save({

        })
    }
}

module.exports = ResourceService;
