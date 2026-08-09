# Node.js REST API Demo

[![CI](https://github.com/rsyrysy/nodejsrestapidemo/actions/workflows/ci.yml/badge.svg)](https://github.com/rsyrysy/nodejsrestapidemo/actions)
[![License: ISC](https://img.shields.io/badge/License-ISC-blue.svg)](https://opensource.org/licenses/ISC)

A production-ready, world-class Node.js REST API demonstrating modern software engineering best practices. This repository can serve as a template or starting point for your backend services.

## Features

- **Modern Architecture**: Cleanly separated routes, controllers, and config (`src/` directory).
- **Environment Configuration**: Uses `dotenv` for managing sensitive credentials securely.
- **Robust Database Connection**: Connection pooling for SQL Server via `mssql`.
- **API Documentation**: Interactive Swagger UI available at `/api-docs`.
- **Security & Reliability**: Configured with `helmet`, `cors`, and centralized error handling.
- **Code Quality**: Enforced via ESLint and Prettier.
- **Containerization**: Included `Dockerfile` and `docker-compose.yml` for effortless local development.
- **Continuous Integration**: GitHub Actions workflow pre-configured for automated checks.

## Quick Start (with Docker)

The easiest way to run the API is via Docker Compose:

```bash
# Clone the repository
git clone https://github.com/rsyrysy/nodejsrestapidemo.git
cd nodejsrestapidemo

# Start the application
docker-compose up --build
```

The API will be available at http://127.0.0.1:9000.
View API Documentation at http://127.0.0.1:9000/api-docs.

## Manual Setup

1. **Install dependencies**:
   ```bash
   npm install
   ```

2. **Configure Environment**:
   Create a `.env` file in the root based on `.env.example` (or configure DB credentials directly).

3. **Run the server**:
   ```bash
   # Development mode with nodemon
   npm run dev

   # Production mode
   npm start
   ```

## Development

- `npm run lint`: Lint the codebase using ESLint.
- `npm run format`: Format code using Prettier.
- `npm test`: Run tests via Jest.