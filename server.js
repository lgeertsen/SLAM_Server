var express = require('express');
var app = express();
var server = require('http').Server(app);
var io = require('socket.io')(server, {});

// Demarrer le serveur sur le port definie par le système sinon port 3000
server.listen(process.env.PORT || 3000);
console.log(":: Express :: Listening on port 3000");

// io.sockets.on('connection', function(socket) {
//   // socket.id = random(1, 1000000000);
//   // SOCKET_LIST[socket.id] = socket;
//   console.log('A client just joined on', socket.id);
//
//   socket.emit('onconnected', { id: socket.id });
// });

io.on('connection', function(socket){
  console.log('a user connected');
});

setInterval(() => {
  io.emit('ping', { data: (new Date())/1});
}, 1000);
