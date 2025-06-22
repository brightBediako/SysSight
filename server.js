const http = require("http");
const url = require("url");
const app = require("./app/app.js");
const cpuController = require("./controllers/cpuController");
const memoryController = require("./controllers/memoryController");
const osController = require("./controllers/osController");
const userController = require("./controllers/userController");
const networkController = require("./controllers/networkController");
const processController = require("./controllers/processController");

//http server
const server = http.createServer((req, res) => {
  const parsedUrl = url.parse(req.url, true);
  res.setHeader("Content-Type", "application/json");
  if (parsedUrl.pathname === "/") {
    res.statusCode = 200;
    res.end(
      JSON.stringify({
        name: "SysSight - Node.js System Monitor API",
        description:
          "A comprehensive system monitoring API built with Node.js that provides real-time insights into your computer's performance and system metrics. SysSight offers a simple, lightweight solution for monitoring CPU, memory, network, and process information through RESTful endpoints.",
        routes: [
          "https://syssight.onrender.com/cpu",
          "https://syssight.onrender.com/memory",
          "https://syssight.onrender.com/user",
          "https://syssight.onrender.com/os",
          "https://syssight.onrender.com/process",
          "https://syssight.onrender.com/network",
        ],
      })
    );
  } else if (parsedUrl.pathname === "/cpu") {
    res.end(JSON.stringify(cpuController.getCpuInfo(), null, 2));
  } else if (parsedUrl.pathname === "/memory") {
    res.end(JSON.stringify(memoryController.getMemoryInfo(), null, 2));
  } else if (parsedUrl.pathname === "/os") {
    res.end(JSON.stringify(osController.getOsInfo(), null, 2));
  } else if (parsedUrl.pathname === "/user") {
    res.end(JSON.stringify(userController.getUserInfo(), null, 2));
  } else if (parsedUrl.pathname === "/network") {
    res.end(JSON.stringify(networkController.getNetworkInfo(), null, 2));
  } else if (parsedUrl.pathname === "/process") {
    res.end(JSON.stringify(processController.getProcessInfo(), null, 2));
  } else {
    res.statusCode = 404;
    res.end(
      JSON.stringify({
        error: "Route Not Found",
      })
    );
  }
});

// start server
const PORT = process.env.PORT || 3000;
// const server = http.createServer(app);
server
  .listen(PORT, () => {
    console.log(`Server is up and running at http://localhost:${PORT}`);
  })
  .on("error", (err) => {
    if (err.code === "EADDRINUSE") {
      console.log(`Port ${PORT} is busy. Trying port ${PORT + 1}...`);
      server.listen(PORT + 1, () => {
        console.log(`Server is up and running at http://localhost:${PORT + 1}`);
      });
    } else {
      console.error("Server error:", err);
    }
  });
