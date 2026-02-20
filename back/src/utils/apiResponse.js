class ApiResponse {
    static success(res, message, data = null, statusCode = 200) {
        return res.status(statusCode).json({
            success: true,
            message,
            data,
            timestamp: new Date().toISOString()
        });

    }

   static error(res, message, statusCode = 500, errors = null) {
        return res.status(statusCode).json({
            success: false,
            message,
            errors,
            timestamp: new Date().toISOString()
        });
    }
    static created(res, message, data = null) {
        return this.success(res, message, data, 201);
    }
    static notFound(res, message = 'Resource not found') {
        return this.error(res, message, 404);
    }

    static badRequest(res, message , error= null) {
        return this.error(res, message, 400);
    }
}

export default ApiResponse;