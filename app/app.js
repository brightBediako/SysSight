const http = require("http");

const cpu = require("../controllers/cpuController.js");
const memory = require("../controllers/memoryController.js");
const user = require("../controllers/userController.js");
const network = require("../controllers/networkController.js");
const osInfo = require("../controllers/osController.js");
const processInfo = require("../controllers/processController.js");

module.exports = {
  cpu,
  memory,
  user,
  network,
  osInfo,
  processInfo,
};
