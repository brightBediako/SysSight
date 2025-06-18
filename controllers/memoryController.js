const os = require("os");
const formatBytes = require("../utils/formatBytes");

// get memory info
const getMemoryInfo = () => {
  const total = formatBytes(os.totalmem());
  const free = formatBytes(os.freemem());
  const usage = (1 - (os.freemem() / os.totalmem()) * 100).toFixed(2) + "%";
  return {
    total,
    free,
    usage,
  };
};

// Export the memory info controller
const memoryController = {
  getMemoryInfo,
};

module.exports = memoryController;