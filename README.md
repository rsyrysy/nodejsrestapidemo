# Node.js REST API Demo

This project is a RESTful API demonstration using Node.js. It showcases how to create a simple API that handles CRUD operations (Create, Read, Update, Delete) for a resource.

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [API Endpoints](#api-endpoints)
- [Examples](#examples)
- [Contributing](#contributing)
- [License](#license)

## Installation

To run this project locally:

1. Clone the repository:
   ```bash
   git clone https://github.com/rsyrysy/nodejsrestapidemo.git
   cd nodejsrestapidemo
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Run the application:
   ```bash
   npm start
   ```

## Usage

The API is accessible on `http://localhost:3000`. You can use tools like Postman or CURL to interact with it.

## API Endpoints

### 1. Create a New Resource
- **POST** `/api/resource`
- Body: `{ "name": "Resource Name" }`
- Response: `201 Created`

### 2. Get All Resources
- **GET** `/api/resource`
- Response: `200 OK`

### 3. Get a Resource by ID
- **GET** `/api/resource/:id`
- Response: `200 OK`

### 4. Update a Resource
- **PUT** `/api/resource/:id`
- Body: `{ "name": "Updated Resource Name" }`
- Response: `200 OK`

### 5. Delete a Resource
- **DELETE** `/api/resource/:id`
- Response: `204 No Content`

## Examples

Here are some example requests:

1. **Create a Resource**
   ```bash
   curl -X POST http://localhost:3000/api/resource -d '{"name":"New Resource"}' -H 'Content-Type: application/json'
   ```
2. **Get All Resources**
   ```bash
   curl -X GET http://localhost:3000/api/resource
   ```

## Contributing

Contributions are welcome! Please fork the repository and submit a pull request.

## License

This project is licensed under the MIT License.