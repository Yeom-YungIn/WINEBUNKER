class VinService {
    constructor(db) {
        this.db = db
    }

    /**
     * VIN 조건조회 (resource 포함)
     * @param {string} vinName
     * @param {number} offset offset
     * @param {number} limit limit
     */
    async findAllVinwithResource(vinName, offset, limit) {
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

    /**
     * VIN 조건조회
     * @param {string} vinName
     * @param {number} offset offset
     * @param {number} limit limit
     */
    async findAllVin(vinName, offset, limit) {
        const findVinList = await this.db.vin.findAll({
            // attributes: ['vinSn','vinName'],
            offset: offset || 0,
            limit: limit || 5,
            where: {vinName: vinName}
        });
        return findVinList;
    }

    /**
     * VIN 조회
     * @param {string} vinName
     */
    async findVin(vinName) {
        const findVin = await this.db.vin.findOne({
            // attributes: ['vinSn','vinName'],
            where: {vinName: vinName}
        });
        return findVin;
    }
}
module.exports = VinService;