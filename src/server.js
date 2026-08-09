require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');
const helmet = require('helmet');
const cors = require('cors');
const morgan = require('morgan');
const swaggerUi = require('swagger-ui-express');
const YAML = require('yamljs');
const path = require('path');

const studentRoutes = require('./routes/studentRoutes');
const destinationRoutes = require('./routes/destinationRoutes');
const { errorHandler } = require('./middleware/errorHandler');

const app = express();
const PORT = process.env.PORT || 9000;

// Middleware
app.use(helmet());
app.use(cors());
app.use(morgan('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Swagger Documentation
const swaggerDocument = YAML.load(path.join(__dirname, 'swagger.yaml'));
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));

// Welcome Route
app.get('/', (req, res) => res.send('Welcome! You are all set to go! Check /api-docs for API documentation.'));

// API Routes
app.use('/api/students', studentRoutes);
app.use('/api', destinationRoutes);

// Error Handling Middleware
app.use(errorHandler);

// Start Server
if (require.main === module) {
  app.listen(PORT, '127.0.0.1', () => {
    console.log(`Server running at http://127.0.0.1:${PORT}/`);
    console.log(`API Docs available at http://127.0.0.1:${PORT}/api-docs`);
  });
}

module.exports = app;
