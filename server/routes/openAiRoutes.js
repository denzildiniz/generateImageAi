const express = require('express');
const router = express.Router();

const { generateImage } = require('../controllers/openAIController');

// Path: routes\openAI.js
router.route('/generateImage').get(generateImage).post(generateImage);

module.exports = router;