// ************ Require's ************
const express = require('express');
const router = express.Router();

// ************ Controller Require ************
const productController = require('../controllers/productController');

/*** EVENTOS ***/ 
router.get('/:id', productController.evento); 
router.get('/', productController.evento); 

module.exports = router;