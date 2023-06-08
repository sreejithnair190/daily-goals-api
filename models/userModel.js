const mongoose = require('mongoose');
const validator = require('validator');

const userSchema = mongoose.Schema({
    first_name:{
        type:String,
        required: [true, 'A user must have a first name'], 
    },
    last_name:{
        type: String,
        required: [true, 'A user must have a last name']
    },
    email:{
        type: String,
        required: [true, 'A user must have a email'],
        lowercase: true,
        unique: true,
        valdate: [validator.isEmail, 'Please Provide a valid email']
    },
    password:{
        type: String,
        required: [true, 'A user must have a password']
    },
    confirm_password:{
        type: String,
        required: [true, 'Please enter your password to confirm'],
        valdate: {
            validator: function (el){
                return this.password  == el;
            },
            message: 'Password should match'
        }
    },
})