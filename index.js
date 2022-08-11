const path = require('path');
const express = require('express');
const app = express();

const SocketIO = require('socket.io');

// settings
app.set('port', process.env.PORT || 3000);


// start the server
const server = app.listen(app.get('port'),()=>{
    console.log('server on port',app.get('port')); 
});

// websockets
const io = SocketIO(server);

io.on('connection', (socket) =>{

    console.log('new connection', socket.id);

    socket.on('notificacion:ingreso', (data) => {
        io.sockets.emit('notificacion:ingreso', data);
        console.log(data);
    });
    socket.on('chat:message', (data) => {
        io.sockets.emit('chat:message', data);
    });

    socket.on('chat:typing', (data) => {
        console.log(data);
        socket.broadcast.emit('chat:typing', data);
    });
  socket.on('message', function(msg){
    let data = msg;
    socket.broadcast.emit("hello", "world");
    console.log(msg);
  });
  socket.on('saludo_socket',(data) => {
    console.log(data.now);
    io.sockets.emit('saludo_socket', data.now);
  });
  socket.on('temperatura_socket',(data) => {
    console.log(data.now);
    io.sockets.emit('temperatura_socket', data.now);
  });
  socket.on('medir_temperatura_socket',(data) => {
    console.log(data.now);
    io.sockets.emit('medir_temperatura_socket', data.now);
  });
  socket.on('temperatura_socket2',(data) => {
    console.log(data.now);
    io.sockets.emit('temperatura_socket2', data.now);
  });
  socket.on('temperatura_socket3',(data) => {
    console.log(data.now);
    io.sockets.emit('temperatura_socket3', data.now);
  });
  socket.on('despido_socket',(data) => {
    console.log(data.now);
    io.sockets.emit('despido_socket', data.now);
  });
  socket.on('desinfeccion_c',(data) => {
    console.log(data.now);
    io.sockets.emit('desinfeccion_c', data.now);
  });
  socket.on('desinfeccion_m',(data) => {
    console.log(data.now);
    io.sockets.emit('desinfeccion_m', data.now);
  });
  socket.on('terminar',(data) => {
    console.log(data.now);
    io.sockets.emit('terminar', data.now);
  });
    
});
