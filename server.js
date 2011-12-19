(function() {
  var io;
  io = require('socket.io').listen(4000);
  io.sockets.on('connection', function(socket) {
    socket.on('smove', function(data) {
      socket.broadcast.emit('drawAndUpdateGameLogicEvent', {
        x: data.x,
        y: data.y
      });
    });
  });
}).call(this);
