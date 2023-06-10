const express = require('express');
const morgan = require('morgan');

const AppError = require('./utils/appError');
const errorHandler = require('./utils/errorHandler');
const userRoute = require('./routes/userRoute');
const taskRoute = require('./routes/userRoute');

const app = express()

app.use(express.json());
app.use(morgan('dev'));

app.use('/api/v1/user', userRoute);
app.use('/api/v1/task', taskRoute)

app.all('*', (req, res, next) => {
    next(new AppError(`${req.originalUrl} not found!`, 404))
});

app.use(errorHandler);

module.exports = app;