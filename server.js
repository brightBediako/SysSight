const http = require("http");
const url = require("url");
const { get } = require("http");
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
        name: "Node.js System Monitor API",
        description: "System Monitor description",
        routes: ["/cpu", "/memory", "/user", "/os", "/process", "/network"],
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
