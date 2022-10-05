// ************ Require's ************
const express = require('express');
const router = express.Router();

// ************ Controller Require ************
const mainController = require('../controllers/mainController');


// HOME
router.get('/', mainController.index); 
router.get('/home',mainController.index)

//LOGIN
router.get('/login', mainController.login); 


//register
router.get('/register', mainController.register);

//carrito
router.get('/cart', mainController.cart);


module.exports = router;