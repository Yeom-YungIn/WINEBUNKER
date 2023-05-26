const expressValidator = require('express-validator')

class Valiadator {

    constructor(body, validationResult) {
        // this.query = query
        this.body = expressValidator.body()
        this.validationResult = expressValidator.validationResult()
    }

    // validation(req, res, next){
    //     const errors = this.validationResult(req)
    //     if (!errors.isEmpty()) {
    //         throw httpError(400)
    //     }
    //     next()
    // }

    isNumeric(field, res){
        this.body(field).notEmpty().isNumeric()
        const err = this.validationResult(res)
        if(!err.isEmpty()) {
            throw new Error("err")
        }
    }
}
module.exports = Valiadator;