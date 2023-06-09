const User = require('./../models/userModel');

exports.get_users = async(req, res) => {
    try {
        const user = await User.find();

        res.status(200).json({
            status:"success",
            data:{
                user
            }
        });
    } catch (error) {
        res.status(400).json({
            status:"failed",
            error
        });
    }
}