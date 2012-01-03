var Network = {}

Network.outBoundMessages = [];
Network.outFrequency = [];
Network.time = 0;

						// event name , freqnency
Network.setEventFrequency = function(key,frequency){
	Network.outFrequency.push({name:key,frequency:frequency});
}

Network.getFrequencyLimit = function(key){
	for( msg in Network.outFrequency){
		if(Network.outFrequency[msg].name == key)
			return Network.outFrequency[msg].frequency
	}

	return 0;
};

Network.okToSendMessage = function(key){
	for( msg in Network.outBoundMessages )
	{
		if( Network.outBoundMessages[msg].name == key )
			return false;
	}

	Network.outBoundMessages.push( {name: key , frequency: Network.getFrequencyLimit(key) } )

	return true;
}

Network.update = function(){
	for( msg in Network.outBoundMessages){
		Network.outBoundMessages[msg].frequency--;

		if(Network.outBoundMessages[msg].frequency < 0){
			delete Network.outBoundMessages[msg];
            Network.outBoundMessages.splice (msg, 1); 
        }
	}
}