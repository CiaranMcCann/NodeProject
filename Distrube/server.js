var io = require('socket.io').listen(8080);

io.sockets.on('connection', function (socket) {
  
//console.log(socket);

    socket.set('nickname', "dfd", function () {
      socket.emit('ready');
    
    });
  console.log(socket)

  socket.on('msg', function () {
    socket.get('nickname', function (err, name) {
      console.log('Chat message by ', name);
    });
  });
});