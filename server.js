(function() {
  var io;
  io = require('socket.io').listen(4000);

  var entities = [];

  io.sockets.on('connection', function(socket) {
  	console.log('--------Client connected from: ' + socket.handshake.address.address + '------------------');
    
    //When a user connections eg: refreshs the page, a person object is
    //created for them and passed around to the other clients by the addNewPersonToWorld event
    socket.on('onConnectionCreateNewEnitiy', function(newPerson) {   
	  	   
	  newPerson.ip = socket.handshake.address.address;     
      entities.push(newPerson);

      socket.emit('onConnectionGetEntites', entities);  
      socket.broadcast.emit('addNewPersonToWorld', newPerson);

      socket.on('updatePerson', function(person){
      	for( enty in entities){
      		if(entities[enty].sig == person.sig)
      		{
      		   entities[enty] = person;
      		   socket.broadcast.emit('updatePersonInWorld', person);
      		}
      	}
      });

    });


     //socket.on('disconnect', function (){
    	//io.sockets.emit('user disconnected');
  //	});


  });
}).call(this);
