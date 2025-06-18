const os = require("os");
const formatTime = require("../utils/formatTime");

// get os info
const getOsInfo = () => {
  const platform = os.platform();
  const type = os.type();
  const release = os.release();
  const hostname = os.hostname();
  const uptime = formatTime(os.uptime());
  return {
    platform,
    type,
    release,
    hostname,
    uptime,
  };
};

// Export the OS info controller
const osController = {
  getOsInfo,
};

module.exports = osController;
