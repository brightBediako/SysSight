const os = require("os");

// get user info
const getUserInfo = () => {
  const user = os.userInfo();
  return user;
};

const userController = {
  getUserInfo,
};

module.exports = userController;