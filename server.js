(function() {
  var io;
  io = require('socket.io').listen(4000);
  io.sockets.on('connection', function(socket) {
    socket.on('smove', function(data) {
      socket.broadcast.emit('smove', {
        person:data.person
      });
    });
  });
}).call(this);
