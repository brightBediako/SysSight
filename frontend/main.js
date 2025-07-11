function fetchInfo(endpoint) {
  const output = document.getElementById("output");

  // Show loading state
  output.innerHTML = "Loading...";

  fetch(`https://syssight.onrender.com/${endpoint}`)
    .then((res) => {
      if (!res.ok) {
        throw new Error(`HTTP error! status: ${res.status}`);
      }
      return res.json();
    })
    .then((data) => {
      output.innerHTML = `<strong>${endpoint.toUpperCase()} Information:</strong>\n\n${JSON.stringify(
        data,
        null,
        2
      )}`;
    })
    .catch((error) => {
      console.error("Error fetching data:", error);
      output.innerHTML = `<div class="error">Error: ${error.message}</div>
      
Make sure the server is running on https://syssight.onrender.com`;
    });
}

// function to test if server is running
function testServerConnection() {
  fetch("https://syssight.onrender.com/")
    .then((res) => res.json())
    .then((data) => {
      console.log("Server is running:", data);
    })
    .catch((error) => {
      console.error("Server connection failed:", error);
      const output = document.getElementById("output");
      output.innerHTML = `<div class="error">Server Connection Failed!
      
Please make sure the server is running on https://syssight.onrender.com/
Error: ${error.message}</div>`;
    });
}

// test server connection when page loads
document.addEventListener("DOMContentLoaded", function () {
  testServerConnection();
});
