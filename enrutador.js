var express = require('express');
var router = express.Router();

// About page route.
router.get('/about', function (req, res) {
  res.send('About this wiki');
})


var CtrlUtilidades = require('./controladores/utilidades');

		
router.route('/login')
        .post(CtrlUtilidades.postLogin);


router.route('/returnAllCategories')
        .get(CtrlUtilidades.returnAllCategories);

module.exports = router;