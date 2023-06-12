exports.catchAsynErr = (fn) => {
    return (req, res, next) => {
        fn(req, res, next).catch(next);
    }
}

exports.successMessage = (res, [dataObject], message = '', status = 200) => {
    res.status(status).json({
        status:'success',
        if (message) {
            message
        },
        data:{
            [dataObject]:dataObject
        }
    });
}