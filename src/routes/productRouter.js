// ************ Require's ************
const express = require('express');
const router = express.Router();
const multer = require('multer');
const path = require('path');

const storage = multer.diskStorage({
    destination: function (req,file,cb){
        cb(null,'../../public/images/uploads')
    },
    filename: function(req,file,cb){
        cb(null,`${Date.now()}_img_${path.extname(file.originalname)}`);
    },
})

const uploadFile = multer({storage})

// ************ Controller Require ************
const productController = require('../controllers/productController');

router.get('/',productController.vistaListadoProd,)
router.get('/create',productController.vistaCrearProd)
router.get('/detail/:id',productController.vistaDetalleProd)
router.get('/:id/edit',productController.vistaEditarProd)

router.post('/',uploadFile.single('nombreInputImagenEventoHTML'),productController.accionGuardar) //guardar un nuevo producto
router.put('/:id',productController.accionEditar)
router.delete('/:id',productController.accionEliminar)
module.exports = router;