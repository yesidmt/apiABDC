//exports
exports.getDateServer = function(req,res){
   res.json({ "hour":  getDateTime()});
};

exports.getDatosSO = function(req,res){
  getDatosSO();
};
exports.callName = function(req,res){
  callName();
};

exports.postLogin = function (req,res){
  // console.log(req.body);
   var vars =({
		username:    req.body.username,
		password:    req.body.password
		
	});
   res.status(200).jsonp(vars);   
};

let {PythonShell} = require('python-shell')
//Metodos

function getDatosSO(){
	
const os=require('os');

console.log('Sistema operativo:'+os.platform());
console.log('Versión del sistema operativo:'+os.release());
console.log('Memoria total:'+os.totalmem()+' bytes');
console.log('Memoria libre:'+os.freemem()+' bytes');
}

function getDateTime() {

    var date = new Date();

    var hour = date.getHours();
    hour = (hour < 10 ? "0" : "") + hour;

    var min  = date.getMinutes();
    min = (min < 10 ? "0" : "") + min;

    var sec  = date.getSeconds();
    sec = (sec < 10 ? "0" : "") + sec;

    var year = date.getFullYear();

    var month = date.getMonth() + 1;
    month = (month < 10 ? "0" : "") + month;

    var day  = date.getDate();
    day = (day < 10 ? "0" : "") + day;

    return year + ":" + month + ":" + day + ":" + hour + ":" + min + ":" + sec;

}

  
function callName(req, res) { 
  
var options = {
  mode: 'text',
  args: ['5', '2', 'value3']
};

const ps = require('python-shell')
ps.PythonShell.run(__dirname+'/hello2.py', options, function (err, results) {
  if (err) throw err;
  console.log('finished');
  console.log(results);
  return(results);
});
} 