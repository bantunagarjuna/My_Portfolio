const express = require('express');
const serverless = require('serverless-http');
const path = require('path');
const portfolioController = require('../src/controllers/portfolioController');

const app = express();
const router = express.Router();

// Set up EJS
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, '../build/views'));

// Middleware
app.use(express.json());
app.use(express.static(path.join(__dirname, '../build/public')));

// Routes
router.get('/', portfolioController.getPortfolio);

app.use('/.netlify/functions/server', router);
app.use('/', router);

// Export the handler
module.exports.handler = serverless(app);