const http = require("http");
const url = require("url");
const { get } = require("http");
const app = require("./app/app.js");




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
    res.end(JSON.stringify(getCpuInfo(), null, 2));
  } else if (parsedUrl.pathname === "/memory") {
    res.end(JSON.stringify(getMemoryInfo(), null, 2));
  } else if (parsedUrl.pathname === "/os") {
    res.end(JSON.stringify(getOsInfo(), null, 2));
  } else if (parsedUrl.pathname === "/user") {
    res.end(JSON.stringify(getUserInfo(), null, 2));
  } else if (parsedUrl.pathname === "/network") {
    res.end(JSON.stringify(getNetworkInfo(), null, 2));
  } else if (parsedUrl.pathname === "/process") {
    res.end(JSON.stringify(getProcessInfo(), null, 2));
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
server.listen(
  PORT,
  console.log(`Server is up and running at http://localhost:${PORT}`)
);
