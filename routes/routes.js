function rootRouteHandler(req, res) {
  res.statusCode = 200;
  res.setHeader("Content-Type", "application/json");
  res.end(
    JSON.stringify({
      name: "SysSight - Node.js System Monitor API",
      description:
        "A comprehensive system monitoring API built with Node.js that provides real-time insights into your computer's performance and system metrics..",
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
}

module.exports = { rootRouteHandler };
