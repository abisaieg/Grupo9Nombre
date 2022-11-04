// ************ Require's ************
const express = require('express');
const router = express.Router();
const multer = require('multer');
const path = require('path');
const fs = require('fs');

const storage = multer.diskStorage({
    destination: function (req,file,cb){
        cb(null, path.join(__dirname,'../../public/images/uploads')); 
    },
    filename: function(req,file,cb){
        cb(null,`${Date.now()}_img_${path.extname(file.originalname)}`);
    },
})

const uploadFile = multer({storage})

// ************ Controller Require ************
const mainController = require('../controllers/mainController');

// HOME
router.get('/', mainController.index); 
router.get('/home',mainController.index)

// REGISTRARSE
router.get('/register',mainController.vistaCrearUsuario)
router.post('/register',uploadFile.single('imageProduct'),mainController.accionGuardar) //guardar un nuevo producto

module.exports = router;