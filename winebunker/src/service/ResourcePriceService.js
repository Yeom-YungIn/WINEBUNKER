const db = require("../models");
const {v4: uuidv4} = require("uuid");


class ResourcePriceService {
    db;
    constructor(db) {
        this.db = db
    }

    // set db(db) {
    //     this.#db = db
    // }
    /**
     * ResourcePrice 등록
     */
    async saveResourcePrice(resourceId, req, transaction) {
        try {
           return await this.db.resourcePrice.create({
                    resourceId: resourceId,
                    price: req.price,
                    store: req.store,
                    capacity: req.capacity,
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

module.exports = ResourcePriceService;
