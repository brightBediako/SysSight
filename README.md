# Node.js System Monitor API

SysSight is a comprehensive system monitoring API built with Node.js that provides real-time insights into your computer's performance and system metrics.

## Table of Contents

- [Features](#features)
- [Tech Stack](#tech-stack)
- [Project Structure](#project-structure)
- [Installation](#installation)
- [Running the App](#running-the-app)
- [API Documentation](#api-documentation)

## Features

- **CPU Information**: Get detailed CPU metrics including model, cores, architecture, and current load
- **Memory Usage Statistics**: Monitor RAM usage, available memory, and memory allocation
- **Operating System Details**: Access OS information including platform, version, and uptime
- **User Information**: Retrieve current user and system user details
- **Network Interface Data**: Monitor network interfaces and their configurations
- **Process Metrics**: Track process-specific metrics and environment variables
- **Real-time Monitoring**: Live performance data updates
- **RESTful API**: Easy-to-use HTTP endpoints for all system metrics

## Tech Stack

- **Node.js** - Runtime environment
- **HTTP Module** - Built-in HTTP server functionality
- **OS Module** - Operating system utilities
- **Process Module** - Process information and control
- **URL Parsing** - Request routing and parameter handling

## Project Structure

```
system-monitor-api/
├── src/
│   ├── server.js          # Main server file
│   ├── routes/
│   │   ├── cpu.js         # CPU monitoring endpoints
│   │   ├── memory.js      # Memory monitoring endpoints
│   │   ├── system.js      # System information endpoints
│   │   ├── network.js     # Network interface endpoints
│   │   └── process.js     # Process monitoring endpoints
│   ├── utils/
│   │   ├── systemInfo.js  # System information utilities
│   │   └── formatter.js   # Data formatting helpers
│   └── middleware/
│       └── cors.js        # CORS handling
├── package.json
├── package-lock.json
└── README.md
```

## Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/yourusername/system-monitor-api.git
   cd system-monitor-api
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Verify Node.js version**
   ```bash
   node --version
   ```
   *Requires Node.js v14.0.0 or higher*

## Running the App

### Development Mode
```bash
npm run dev
```

### Production Mode
```bash
npm start
```

The API server will start on `http://localhost:3000` by default.

## API Documentation

### Base URL
```
http://localhost:3000/api/v1
```

### Endpoints

#### CPU Information
- **GET** `/cpu`
  - Returns CPU model, cores, architecture, and current load
  - Response format:
    ```json
    {
      "model": "Intel(R) Core(TM) i7-9750H CPU @ 2.60GHz",
      "cores": 6,
      "architecture": "x64",
      "loadAverage": [1.2, 1.5, 1.8],
      "speed": 2600
    }
    ```

#### Memory Usage
- **GET** `/memory`
  - Returns memory usage statistics
  - Response format:
    ```json
    {
      "total": 17179869184,
      "free": 8589934592,
      "used": 8589934592,
      "usagePercentage": 50.0
    }
    ```

#### System Information
- **GET** `/system`
  - Returns operating system details
  - Response format:
    ```json
    {
      "platform": "darwin",
      "type": "Darwin",
      "release": "21.6.0",
      "hostname": "MacBook-Pro.local",
      "uptime": 3600,
      "arch": "x64"
    }
    ```

#### User Information
- **GET** `/user`
  - Returns current user information
  - Response format:
    ```json
    {
      "username": "john_doe",
      "uid": 501,
      "gid": 20,
      "homedir": "/Users/john_doe",
      "shell": "/bin/zsh"
    }
    ```

#### Network Interfaces
- **GET** `/network`
  - Returns network interface configurations
  - Response format:
    ```json
    {
      "interfaces": {
        "en0": [
          {
            "address": "192.168.1.100",
            "netmask": "255.255.255.0",
            "family": "IPv4",
            "mac": "00:00:00:00:00:00",
            "internal": false
          }
        ]
      }
    }
    ```

#### Process Information
- **GET** `/process`
  - Returns current process metrics
  - Response format:
    ```json
    {
      "pid": 12345,
      "ppid": 1234,
      "platform": "darwin",
      "version": "v18.17.0",
      "memoryUsage": {
        "rss": 25165824,
        "heapTotal": 7684096,
        "heapUsed": 4883840,
        "external": 1089470
      },
      "cpuUsage": {
        "user": 123456,
        "system": 67890
      }
    }
    ```

#### Environment Variables
- **GET** `/process/env`
  - Returns filtered environment variables (sensitive data excluded)
  - Response format:
    ```json
    {
      "NODE_ENV": "development",
      "PATH": "/usr/local/bin:/usr/bin:/bin",
      "HOME": "/Users/john_doe"
    }
    ```

#### Health Check
- **GET** `/health`
  - Returns API health status
  - Response format:
    ```json
    {
      "status": "healthy",
      "timestamp": "2024-01-15T10:30:00.000Z",
      "uptime": 3600,
      "version": "1.0.0"
    }
    ```

### Error Responses

All endpoints return consistent error responses:
```json
{
  "error": {
    "code": 404,
    "message": "Endpoint not found",
    "timestamp": "2024-01-15T10:30:00.000Z"
  }
}
```

### Rate Limiting

The API implements basic rate limiting:
- 100 requests per minute per IP address
- 429 status code returned when limit exceeded

### CORS Support

Cross-Origin Resource Sharing (CORS) is enabled for all endpoints, allowing requests from any origin in development mode.

---

**Built with ❤️ Node.js**