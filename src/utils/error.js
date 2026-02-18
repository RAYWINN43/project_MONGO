class AppError extends Error {
    constructor(message, statusCode = 400) {
        super(message);
        this.statusCode = statusCode;
    }
}

function notFound(req, res) {
    res.status(404).json({ error: "Not Found" });
}

function errorHandler(err, req, res, next) {
    const status = err.statusCode || 500;
    res.status(status).json({
        error: err.message || "Internal Server Error"
    });
}



module.exports = { AppError, notFound, errorHandler };
