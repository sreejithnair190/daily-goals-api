const express = require('express');
const morgan = require('morgan');

const userRoute = require('./routes/userRoute');
const taskRoute = require('./routes/userRoute');

const app = express()

app.use(express.json());
app.use(morgan('dev'));

app.use('/api/v1/user', userRoute);
app.use('/api/v1/task', taskRoute);

module.exports = app;