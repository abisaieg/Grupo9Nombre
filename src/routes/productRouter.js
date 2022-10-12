// ************ Require's ************
const express = require('express');
const router = express.Router();

// ************ Controller Require ************
const productController = require('../controllers/productController');

/*** EVENTOS ***/ 

// descripcion evento
router.get('/', productController.evento); 

// listar evento
router.get('/listar', productController.listar); 

// crear evento
router.get('/crear', productController.crear);

// editar
router.get('/editar', productController.editar);

module.exports = router;