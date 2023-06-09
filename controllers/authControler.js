exports.sign_up = async (req, res) => {
  try {
    const first_name = req.body.first_name;
    const last_name = req.body.last_name;
    const email = req.body.email;
    const password = req.body.password;

    const user = await User.create({
      first_name,
      last_name,
      email,
      password,
    });

    res.status(200).json({
      status: "success",
      data: {
        user,
      },
    });
  } catch (error) {
    res.status(200).json({
      status: "failed",
      error,
    });
  }
};

exports.login = async (req, res) => {
  try {
  } catch (error) {}
};

exports.forgot_password = async (req, res) => {
  try {
  } catch (error) {}
};

exports.reset_password = async (req, res) => {
  try {
  } catch (error) {}
};
