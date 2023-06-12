const User = require("./../models/userModel");
const Utils = require("./../utils/utils");

exports.get_users = Utils.catchAsynErr(async (req, res) => {
    const user = await User.find();
    Utils.successMessage(res, user);
});
