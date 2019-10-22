const express=require('express');
const app=express();
var bodyParser = require('body-parser');
var server = require('http').Server(app);  
var io = require('socket.io')(server);

var enrutador = require('./enrutador.js');


// Middlewares
app.use(bodyParser.urlencoded({ extended: false })); 
app.use(bodyParser.json()); 



// ...rutas
app.use('/api', enrutador);



/*
const server=app.listen(3000, () => {
  console.log('Servidor web iniciado');
});
*/




 
 //Servidor websocket
 
var messages = [{  
  id: 1,
  text: "mensaje",
  author: "test"
}];

//app.use(express.static('public'));
//app.get('/hello', function(req, res) {  
  //res.status(200).send("");
//});
//

 var clients =[];

io.on('connection', function(socket) {  
  console.log('Alguien se ha conectado con Sockets');
 console.log('connection :', socket.request.connection._peername);
 socket.on('storeClientInfo', function (data) {

            var clientInfo = new Object();
			
            clientInfo.customId     = data.customId;
            clientInfo.clientId     = socket.id;
			console.log("cliente: "+clients); 
            clients.push(clientInfo);
			

        });
  
 console.log("array ids"+clients); 
 
  socket.emit('messages', messages);

  socket.on('new-message', function(data) {
    messages.push(data);

    io.sockets.emit('messages', messages);
  });
});
//


server.listen(3000, function() {  
  console.log("Servidor corriendo en http://localhost:3000");
});


