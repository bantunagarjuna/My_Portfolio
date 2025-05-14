const express = require('express');
const router = express.Router();
const portfolioController = require('../controllers/portfolioController');

// Home route
router.get('/', portfolioController.getPortfolio);

module.exports = router;