# SysSight - Node.js System Monitor API

A comprehensive system monitoring API built with Node.js that provides real-time insights into your computer's performance and system metrics. SysSight offers a simple, lightweight solution for monitoring CPU, memory, network, and process information through RESTful endpoints.

## 🚀 Live Demo

[sysSight](https://syssight.onrender.com/)

## 📋 Table of Contents

- [🚀 Features](#-features)
- [🛠️ Tech Stack](#️-tech-stack)
- [📁 Project Structure](#-project-structure)
- [📦 Installation](#-installation)
  - [Prerequisites](#prerequisites)
  - [Setup Instructions](#setup-instructions)
- [🚀 Running the Application](#-running-the-application)
  - [Development Mode](#development-mode)
  - [Production Mode](#production-mode)
- [📚 API Documentation](#-api-documentation)
  - [Base URL](#base-url)
  - [Available Endpoints](#available-endpoints)
    - [🏠 Root Endpoint](#-root-endpoint)
    - [🔥 CPU Information](#-cpu-information)
    - [💾 Memory Usage](#-memory-usage)
    - [💻 Operating System](#-operating-system)
    - [👤 User Information](#-user-information)
    - [🌐 Network Interfaces](#-network-interfaces)
    - [⚙️ Process Information](#️-process-information)
  - [Error Handling](#error-handling)
- [🔧 Configuration](#-configuration)
  - [Environment Variables](#environment-variables)
  - [Port Configuration](#port-configuration)
- [🧪 Testing](#-testing)
  - [Manual Testing](#manual-testing)
  - [Example Usage](#example-usage)
- [🌐 Web Dashboard](#-web-dashboard)
- [🤝 Contributing](#-contributing)
  - [Development Guidelines](#development-guidelines)
- [📝 License](#-license)
- [👨‍💻 Author](#️-author)
- [🆘 Support](#-support)
- [🔄 Version History](#-version-history)

## 🚀 Features

- **CPU Monitoring**: Real-time CPU metrics including model, cores, architecture, and load averages
- **Memory Analytics**: Detailed RAM usage statistics with formatted byte values
- **Operating System Info**: Complete OS details including platform, version, uptime, and hostname
- **User Information**: Current user details and system user data
- **Network Monitoring**: Network interface configurations and status
- **Process Tracking**: Live process metrics and environment variables
- **RESTful API**: Clean, intuitive HTTP endpoints for all system data
- **Cross-Platform**: Works on Windows, macOS, and Linux systems
- **Lightweight**: Minimal dependencies, built with Node.js core modules
- **Web Dashboard**: Interactive web interface for easy system monitoring

## 🛠️ Tech Stack

- **Node.js** - JavaScript runtime environment
- **HTTP Module** - Built-in HTTP server functionality
- **OS Module** - Operating system utilities and information
- **Process Module** - Process information and control
- **URL Module** - Request routing and parameter parsing
- **File System Module** - Static file serving

## 📁 Project Structure

```
sysSight/
├── server.js                 # Main server entry point
├── app/
│   └── app.js               # Application configuration
├── controllers/             # API endpoint controllers
│   ├── cpuController.js     # CPU monitoring logic
│   ├── memoryController.js  # Memory monitoring logic
│   ├── networkController.js # Network interface logic
│   ├── osController.js      # Operating system logic
│   ├── processController.js # Process monitoring logic
│   └── userController.js    # User information logic
├── routes/                  # API route definitions
│   └── routes.js            # Main route definitions
├── utils/                   # Utility functions
│   ├── formatBytes.js       # Byte formatting utilities
│   └── formatTime.js        # Time formatting utilities
├── frontend/                # Web dashboard
│   ├── index.html           # Dashboard HTML
│   └── main.js              # Dashboard JavaScript
├── package.json             # Project dependencies and scripts
├── .gitignore              # Git ignore rules
└── README.md               # Project documentation
```

## 📦 Installation

### Prerequisites

- **Node.js** v14.0.0 or higher
- **npm** (comes with Node.js)

### Setup Instructions

1. **Clone the repository**

   ```bash
   git clone https://github.com/brightBediako/SysSight.git
   cd sysSight
   ```

2. **Install dependencies**

   ```bash
   npm install
   ```

3. **Verify installation**
   ```bash
   node --version
   npm --version
   ```

## 🚀 Running the Application

### Development Mode

```bash
npm start
```

### Production Mode

```bash
# Set environment variables
export NODE_ENV=production
export PORT=3000

# Start the server
npm start
```

The API server will start on `http://localhost:3000` by default. If port 3000 is busy, it will automatically try port 3001.

## 📚 API Documentation

### Base URL

**Local Development:**

```
http://localhost:3000
```

**Production:**

```
https://syssight.onrender.com
```

### Available Endpoints

#### 🏠 Root Endpoint

- **GET** `/`
  - Returns API overview and available routes
  - **Response:**
    ```json
    {
      "name": "SysSight - Node.js System Monitor API",
      "description": "A comprehensive system monitoring API built with Node.js that provides real-time insights into your computer's performance and system metrics",
      "routes": ["/cpu", "/memory", "/user", "/os", "/process", "/network"]
    }
    ```

#### 🔥 CPU Information

- **GET** `/cpu`
  - Returns comprehensive CPU metrics
  - **Response:**
    ```json
    {
      "model": "Intel(R) Core(TM) i7-9750H CPU @ 2.60GHz",
      "cores": 6,
      "architecture": "x64",
      "loadAvg": [1.2, 1.5, 1.8]
    }
    ```

#### 💾 Memory Usage

- **GET** `/memory`
  - Returns detailed memory statistics
  - **Response:**
    ```json
    {
      "total": "16 GB",
      "free": "8 GB",
      "usage": "50.00%"
    }
    ```

#### 💻 Operating System

- **GET** `/os`
  - Returns operating system details
  - **Response:**
    ```json
    {
      "platform": "win32",
      "type": "Windows_NT",
      "release": "10.0.19045",
      "hostname": "DESKTOP-ABC123",
      "uptime": "1d 2h 30m 45s"
    }
    ```

#### 👤 User Information

- **GET** `/user`
  - Returns current user details
  - **Response:**
    ```json
    {
      "uid": 1000,
      "gid": 1000,
      "username": "john_doe",
      "homedir": "C:\\Users\\john_doe",
      "shell": "C:\\WINDOWS\\System32\\cmd.exe"
    }
    ```

#### 🌐 Network Interfaces

- **GET** `/network`
  - Returns network interface configurations
  - **Response:**
    ```json
    {
      "Ethernet": [
        {
          "address": "192.168.1.100",
          "netmask": "255.255.255.0",
          "family": "IPv4",
          "mac": "00:11:22:33:44:55",
          "internal": false
        }
      ],
      "Wi-Fi": [
        {
          "address": "192.168.1.101",
          "netmask": "255.255.255.0",
          "family": "IPv4",
          "mac": "aa:bb:cc:dd:ee:ff",
          "internal": false
        }
      ]
    }
    ```

#### ⚙️ Process Information

- **GET** `/process`
  - Returns current process metrics
  - **Response:**
    ```json
    {
      "pid": 12345,
      "title": "node",
      "nodeVersion": "v18.17.0",
      "uptime": "2h 15m 30s",
      "cwd": "E:\\projects\\sysSight",
      "memoryUsage": {
        "rss": "24 MB",
        "heapTotal": "7.5 MB",
        "heapUsed": "4.8 MB",
        "external": "1.1 MB"
      },
      "env": {
        "NODE_ENV": "development"
      }
    }
    ```

### Error Handling

All endpoints return consistent error responses:

```json
{
  "error": "Route Not Found"
}
```

**HTTP Status Codes:**

- `200` - Success
- `404` - Route not found
- `500` - Internal server error

## 🔧 Configuration

### Environment Variables

| Variable   | Default       | Description        |
| ---------- | ------------- | ------------------ |
| `PORT`     | `3000`        | Server port number |
| `NODE_ENV` | `development` | Environment mode   |

### Port Configuration

The server automatically handles port conflicts:

- If the default port (3000) is busy, it will try port 3001
- This ensures the server always starts successfully

## 🧪 Testing

### Manual Testing

You can test the API endpoints using:

1. **cURL**

   ```bash
   curl http://localhost:3000/cpu
   curl http://localhost:3000/memory
   ```

2. **Postman** or similar API testing tools

3. **Web Browser** - Navigate to `http://localhost:3000` for the root endpoint

4. **Web Dashboard** - Visit `http://localhost:3000/dashboard` for the interactive interface

### Example Usage

```bash
# Get CPU information
curl -X GET http://localhost:3000/cpu

# Get memory usage
curl -X GET http://localhost:3000/memory

# Get all system information
curl -X GET http://localhost:3000/os

# Access the web dashboard
# Open browser to: http://localhost:3000/dashboard
```

## 🌐 Web Dashboard

SysSight includes a modern web dashboard for easy system monitoring:

- **Access**: Visit `http://localhost:3000/dashboard` (local) or `https://syssight.onrender.com/dashboard` (production)
- **Features**:
  - Interactive buttons for each system metric
  - Real-time data display
  - Formatted JSON output
  - Error handling and loading states
  - Responsive design

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

### Development Guidelines

- Follow existing code style and structure
- Add appropriate error handling
- Include comments for complex logic
- Test your changes thoroughly
- Ensure cross-platform compatibility

## 📝 License

This project is licensed under the ISC License - see the [LICENSE](LICENSE) file for details.

## 👨‍💻 Author

**Bright Bediako**

## 🆘 Support

If you encounter any issues or have questions:

1. Check the [Issues](https://github.com/brightBediako/SysSight/issues) page
2. Create a new issue with detailed information
3. Include your operating system and Node.js version

## 🔄 Version History

- **v1.0.0** - Initial release with basic system monitoring capabilities
- **v1.1.0** - Added web dashboard and improved error handling
- **v1.2.0** - Enhanced API responses and added CORS support

---

**Built with ❤️ using Node.js**

_SysSight - Your System's Insight_
