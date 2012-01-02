(function() {
  var io;
  io = require('socket.io').listen(4000);

  var entities = [];

  io.sockets.on('connection', function(socket) {
  	
    

    //When a user connections eg: refreshs the page, a person object is
    //created for them and passed around to the other clients by the addNewPersonToWorld event
    socket.on('onConnectionCreateNewEnitiy', function(newPerson) {   
	  	
	  console.log('--------Client connected from: ' + socket.handshake.address.address + '-------- Sig = ' + newPerson.sig);   
	  socket.set('sig', newPerson.sig); 	   
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

     socket.on('disconnect', function (){
    	socket.get('sig', function (err, sig) {

    		console.log(sig);
    		//TODO maybe thing about changing the sig to a redriect indexer to get O(c) instead of O(n)
     		for( enty in entities){
	      		if(entities[enty].sig == sig)
	      		{
	      		   delete entities[enty];
                   entities.splice (enty, 1);  
	      		   socket.broadcast.emit('onDisconnectRemovePlayer', sig);	      		  
	      		}
      	}
    	});
  	 });


  });
}).call(this);

