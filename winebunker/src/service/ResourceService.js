const db = require("../models");
const {v4: uuidv4} = require("uuid");
const {Op} = require("sequelize");


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
            offset: offset,
            limit: limit,
            order: [['issued', 'desc']],
            include: [
                {
                    model: db.resourcePrice,
                    as: 'resourcePrice',
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
    async findResourceByName (vinName, offset, limit) {
        const resource = await this.db.resource.findAll({
            // attributes: ['id', 'vin', 'publisherId', 'issued'],
            offset: offset,
            limit: limit,
            order: [['issued', 'desc']],
            where: {vinName: {[Op.like]: `%${vinName}%`}},
            include: [
                {
                    model: db.resourcePrice,
                    as: 'resourcePrice',
                }
            ]
        });

        console.log(resource)
        return resource;
    }
    
    /**
     * Resource 등록
     */
    async saveResource(req, transaction) {
        const resourceId = uuidv4();
        try {
            return await this.db.resource.create({
                    id: resourceId,
                    publisherId: req.publisherId,
                    vin: req.vin,
                    purchaseDate: req.purchaseDate,
                    description: req.description,
                    issued: Date.now()
                }
                ,{ transaction }
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
