const http = require("http");
const url = require("url");
const fs = require("fs");
const path = require("path");
const cpuController = require("./controllers/cpuController");
const memoryController = require("./controllers/memoryController");
const osController = require("./controllers/osController");
const userController = require("./controllers/userController");
const networkController = require("./controllers/networkController");
const processController = require("./controllers/processController");
const { rootRouteHandler } = require("./routes/routes.js");

// Create an HTTP server
const server = http.createServer((req, res) => {
  const parsedUrl = url.parse(req.url, true);

  // Add CORS headers for all responses
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET, POST, PUT, DELETE, OPTIONS"
  );
  res.setHeader("Access-Control-Allow-Headers", "Content-Type, Authorization");

  // Handle preflight requests
  if (req.method === "OPTIONS") {
    res.writeHead(200);
    res.end();
    return;
  }

  // Middleware to serve static files
  if (parsedUrl.pathname === "/dashboard") {
    fs.readFile(path.join(__dirname, "frontend", "index.html"), (err, data) => {
      if (err) {
        res.statusCode = 500;
        res.setHeader("Content-Type", "text/html");
        res.end(
          "<h1>Error loading dashboard</h1><p>Could not load the dashboard file.</p>"
        );
      } else {
        res.setHeader("Content-Type", "text/html");
        res.end(data);
      }
    });
    return;
  }

  // Serve main.js file
  if (parsedUrl.pathname === "/main.js") {
    fs.readFile(path.join(__dirname, "frontend", "main.js"), (err, data) => {
      if (err) {
        res.statusCode = 404;
        res.setHeader("Content-Type", "application/json");
        res.end(JSON.stringify({ error: "JavaScript file not found" }));
      } else {
        res.setHeader("Content-Type", "application/javascript");
        res.end(data);
      }
    });
    return;
  }

  // Set JSON content type for API responses
  res.setHeader("Content-Type", "application/json");

  if (parsedUrl.pathname === "/") {
    rootRouteHandler(req, res); // <-- Use the separated handler
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
server
  .listen(PORT, () => {
    // console.log(`Server is up and running at http://localhost:${PORT}`);
    console.log(`Server is up and running on https://syssight.onrender.com/dashboard`);
  })
  .on("error", (err) => {
    if (err.code === "EADDRINUSE") {
      console.log(`Port ${PORT} is busy. Trying port ${PORT + 1}...`);
      server.listen(PORT + 1, () => {
        // console.log(`Server is up and running at http://localhost:${PORT + 1}`);
        console.log(`Server is up and running on https://syssight.onrender.com/dashboard}`);
      });
    } else {
      console.error("Server error:", err);
    }
  });
