exports.catchAsynErr = (fn) => {
    return (req, res, next) => {
        fn(req, res, next).catch(next);
    }
}

exports.successMessage = (status = 200, res, message, ...data) => {
    res.status(status).json({
        status:'success',
        message,
        data
    });
}