const fs = require('fs');
const moment = require('moment');

const handleErrResponse = (err, res) => {
    const statusCode = err.statusCode || 500;
    res.status(statusCode).json({
        status: err.status,
        error: err,
        message: err.message
    });
}

module.exports = (err, req, res, next) => {

    // Write error stack in error log
    // const date = moment.tz('Asia/Kolkata').format('DD-MM-YYYY HH:mm:ss');
    // const data = `[${date}] - ${err.stack}\n`;
    // fs.appendFile(`${__dirname}/../storage/error.log`, data, 'utf-8', (error) => {if(error) {console.log(error)}} )

    // Handle Error
    let error = Object.assign(err);

    // if(error.name == 'CastError') error = handleCastError(error)
    // if(error.code == 11000) error = handleDuplicateFieldsDB(error)
    // if(error.name == 'ValidationError') error = handleValidationError(error)

    handleErrResponse(err, res);
}