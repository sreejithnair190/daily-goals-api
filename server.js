const dotenv = require('dotenv');
const mongoose = require('mongoose');
const app = require('./app');

dotenv.config({path : './.env'})

mongoose.connect(
    process.env.DATABASE,
    {
        useNewUrlParser:true
    }
)
.then(() => console.log("Database connected Successfuly"));

const port = process.env.PORT;
app.listen(port, () => console.log(`Server has been started on ${port}`));