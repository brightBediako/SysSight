const os = require("os");
const formatBytes = require("../utils/formatBytes");
const formatTime = require("../utils/formatTime");

// get process
const getProcessInfo = () => {
  const pid = process.pid;
  const title = process.title;
  const nodeVersion = process.version;
  const uptime = formatTime(process.uptime());
  return {
    pid,
    title,
    nodeVersion,
    uptime,
    cwd: process.cwd(),
    memoryUsage: {
      rss: formatBytes(process.memoryUsage().rss),
      heapTotal: formatBytes(process.memoryUsage().heapTotal),
      heapUsed: formatBytes(process.memoryUsage().heapUsed),
      external: formatBytes(process.memoryUsage().external),
    },
    env: {
      NODE_ENV: process.env.NODE_ENV || "Not set",
    },
  };
};

// Export the process info controller
const processController = {
  getProcessInfo,
};

module.exports = processController;