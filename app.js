const express=require('express');
const app=express();
var bodyParser = require('body-parser');
var server = require('http').Server(app);  
var io = require('socket.io')(server);

var enrutador = require('./enrutador.js');
var cors = require('cors')

app.use(cors())

// Middlewares
app.use(bodyParser.urlencoded({ extended: false })); 
app.use(bodyParser.json()); 


// ...rutas
app.use('/api', enrutador);


server.listen(4000, function() {  
  console.log("Servidor corriendo en http://localhost:4000");
});


