const os = require("os");
const formatBytes = require("../utils/formatBytes");

// get network info
const getNetworkInfo = () => {
  const network = os.networkInterfaces();
  return network;
};

// Export the network info controller
const networkController = {
  getNetworkInfo,
};

module.exports = networkController;
