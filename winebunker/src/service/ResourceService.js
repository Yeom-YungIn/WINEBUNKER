const db = require("../models");
const {v4: uuidv4} = require("uuid");


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
    async saveResource(req, transaction) {
        const resourceId = await uuidv4();
        console.log(resourceId)
        try {
            return await this.db.resource.create({
                    id: resourceId,
                    publisherId: req.publisherId,
                    vin: req.vin,
                    purchaseDate: req.purchaseDate,
                    description: req.description,
                    issued: Date.now()
                },
                { transaction }
            )
        } catch (e) {
            console.log(e)
            return e
        }
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
