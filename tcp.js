var http = require('http');
http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/plain'});
  res.end('Hello World\n');
  console.log(req);
}).listen(1337, "10.243.93.141");
console.log('1337, 10.243.93.141');


/*var net =  require('net');

var server = net.createServer(function (socket) {
  	
  	socket.write("Echo server\r\n");
  	socket.pipe(socket);
	console.log(socket);

});

server.listen(1337, "10.243.93.141");


(function() {
  var io;
  io = require('socket.io').listen(1337, "10.243.93.141");
  io.sockets.on('connection', function(socket) {
    socket.on('drawClick', function(data) {
      socket.broadcast.emit('draw', {
        x: data.x,
        y: data.y,
        type: data.type
      });
    });
  });
}).call(this);
/*