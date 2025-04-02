const express = require('express');
const { submitContactForm } = require('../controllers/ContactController');

const router = express.Router();

// POST route for form submission
router.post('/api/contact', submitContactForm);

module.exports = router;
