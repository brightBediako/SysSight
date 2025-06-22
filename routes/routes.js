function rootRouteHandler(req, res) {
  res.statusCode = 200;
  res.setHeader("Content-Type", "application/json");
  res.end(
    JSON.stringify({
      name: "SysSight - Node.js System Monitor API",
      description:
        "A comprehensive system monitoring API built with Node.js that provides real-time insights into your computer's performance and system metrics.",
      routes: [
        "https://syssight.onrender.com/cpu",
        "https://syssight.onrender.com/memory",
        "https://syssight.onrender.com/user",
        "https://syssight.onrender.com/os",
        "https://syssight.onrender.com/process",
        "https://syssight.onrender.com/network",

        // "http://localhost:3000/cpu",
        // "http://localhost:3000/memory",
        // "http://localhost:3000/user",
        // "http://localhost:3000/os",
        // "http://localhost:3000/process",
        // "http://localhost:3000/network",
      ],
    })
  );
}

module.exports = { rootRouteHandler };
