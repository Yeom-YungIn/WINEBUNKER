class Valiadator {

    constructor(body, validationResult) {
        // this.query = query
        this.body = body
        this.validationResult = validationResult
    }

    validation(req, res, next){
        const errors = this.validationResult(req)
        if (!errors.isEmpty()) {
            throw httpError(400)
        }
        next()
    }

    isNumeric(req){
        return this.body(req).notEmpty().isNumeric()
    }
}
module.exports = Valiadator;