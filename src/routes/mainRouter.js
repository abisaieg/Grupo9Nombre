// ************ Require's ************
const express = require('express');
const router = express.Router();

// ************ Controller Require ************
const mainController = require('../controllers/mainController');

// HOME
router.get('/', mainController.index); 
router.get('/home',mainController.index)

module.exports = router;