const controller = {
    // Root - Show all products|
index: (req, res) => {
    res.render('products/home.ejs');
},
}
module.exports = controller;