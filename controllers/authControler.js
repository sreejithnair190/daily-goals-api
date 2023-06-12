const User = require('./../models/userModel');
const AppError = require('./../utils/appError');
const Utils = require('./../utils/utils');
const AuthService = require("./../services/authService");

exports.sign_up = Utils.catchAsynErr(async (req, res) => {

  const first_name = req.body.first_name;
  const last_name = req.body.last_name;
  const email = req.body.email;
  const password = req.body.password;
  const confirm_password = req.body.confirm_password;

  const user = await User.create({
    first_name,
    last_name,
    email,
    password,
    confirm_password
  });

  const token = AuthService.generateJWT({id:user._id});

  res.status(201).json({
    status:'success',
    message:'Account registered successfully',
    data:{
      user,
      token
    }
  })

  // Utils.successMessage(res, [user, token], 'Successfully registered', 201);
});

// exports.login = async (req, res) => {
//   try {
//   } catch (error) {}
// };

// exports.forgot_password = async (req, res) => {
//   try {
//   } catch (error) {}
// };

// exports.reset_password = async (req, res) => {
//   try {
//   } catch (error) {}
// };
