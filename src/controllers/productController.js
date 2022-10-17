const path = require('path');
const fs = require('fs');

const pathProductDb = path.join(__dirname, '../data/eventos.json');
const eventos = JSON.parse(fs.readFileSync(pathProductDb, 'utf-8'));


const controller = {
	vistaListadoProd: (req, res) => {
		res.render('products/home',{evento: eventos})
	},
	vistaCrearProd: (req, res) => {
		res.render('products/crear')
	},
	vistaDetalleProd: (req, res) => {
		res.render('products/descripcionproducto')
	},
	vistaEditarProd: (req, res) => {
		res.render('products/editar')
	},

	accionGuardar: (req, res) => {},
	accionEditar: (req, res) => {},
	accionEliminar: (req, res) => {},
}
module.exports = controller;