(function() {
  var io;
  io = require('socket.io').listen(4000);

  var entities = [];
  var sig = -1;

  io.sockets.on('connection', function(socket) {

    
    

    //When a user connections eg: refreshs the page, a person object is
    //created for them and passed around to the other clients by the addNewPersonToWorld event
    socket.on('onConnectionCreateNewEnitiy', function(newPerson) {   
    
      sig++;
      newPerson.sig = sig;
      socket.set('sig', sig);
      console.log("First connection sig = " + sig);
  	  	   
  	  newPerson.ip = socket.handshake.address.address;     
      entities[sig] = newPerson;

      socket.emit('onConnectionGetEntites', {entities:entities,playerSig:sig});  
      socket.broadcast.emit('addNewPersonToWorld', newPerson);
    });

    socket.on('updatePerson', function(person){
      	
        socket.get('sig', function (err, playersig) {
                   
            console.log(person.sig + "   Player with sig updated " + playersig)
             entities[playersig] = person
             socket.broadcast.emit('updatePersonInWorld', person);   
             
        });

    });

     socket.on('disconnect', function (){
    	socket.get('sig', function (err, playerSig) {
	      		   entities[playerSig] = null 
	      		   socket.broadcast.emit('onDisconnectRemovePlayer', playerSig);	      		  
	      		});
  	 });



 });
}).call(this);