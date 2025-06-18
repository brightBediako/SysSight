const os = require("os");

// get cpu info
const getCpuInfo = () => {
  const model = os.cpus()[0].model;
  const cores = os.cpus().length;
  const architecture = os.arch();
  const loadAvg = os.loadavg();
  return {
    model,
    cores,
    architecture,
    loadAvg,
  };
};

// Export the CPU info controller
const cpuController = {
  getCpuInfo,
};

module.exports = cpuController;