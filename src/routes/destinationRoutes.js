const express = require('express');
const router = express.Router();
const destinationController = require('../controllers/destinationController');

router.get('/messages', destinationController.getMessages);
router.get('/destination', destinationController.getDestinations);
router.get('/destination/:id', destinationController.getDestinationById);
router.post('/destination', destinationController.createDestination);
router.put('/destination/:id', destinationController.updateDestination);
router.delete('/destination/:id', destinationController.deleteDestination);

module.exports = router;
