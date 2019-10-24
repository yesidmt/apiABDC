// wiki.js - Wiki route module.

var express = require('express');
var router = express.Router();

// Home page route.
router.get('/', function (req, res) {
  res.send('Wiki home page');
})

// About page route.
router.get('/about', function (req, res) {
  res.send('About this wiki');
})


var CtrlUtilidades = require('./controladores/utilidades');

router.route('/dateServer')
        .get(CtrlUtilidades.getDateServer);
		
router.route('/login')
        .post(CtrlUtilidades.postLogin);

router.route('/getOS')
        .get(CtrlUtilidades.getDatosSO);

router.route('/pruebaPS')
        .get(CtrlUtilidades.pruebaPS);
				

/*		
router.route('/name')
        .get(CtrlUtilidades.callName(){
		});
*/

module.exports = router;