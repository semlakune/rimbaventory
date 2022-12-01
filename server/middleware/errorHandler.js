module.exports = function errorHandler(err, req, res, next) {
    let code = 500
    let message = "Internal Server Error"

    if (err.name === "SequelizeValidationError" || err.name === "SequelizeUniqueConstraintError") {
        code = 400
        message = err.errors[0].message
    } else if (err.name === "not_found") {
        code = 404
        message = "Data not found"
    }

    res.status(code).json({ message })
}