const path = require('path');
const fs = require('fs');

const pathProductDb = path.join(__dirname, '../data/eventos.json');
const eventos = JSON.parse(fs.readFileSync(pathProductDb, 'utf-8'));


const controller = {
    // Root - Show all products|
index: (req, res) => {
    const eventos = JSON.parse(fs.readFileSync(pathProductDb, 'utf-8'));
    res.render('products/home',{evento: eventos})
},
}
module.exports = controller;