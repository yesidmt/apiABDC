
exports.returnAllCategories = function(req,res){

var pgp = require("pg-promise")(/*options*/);
var db = pgp("postgres://yesidmt:*yesidmt91@31.220.48.174:5432/abcdDB");
var resp = '';

db.any("select * from categories;", 123)
    .then(function (data) {
      resp=data;
      res.json(data);
    })
    .catch(function (error) {
        console.log("ERROR:", error);
    });


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