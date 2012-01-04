self.onmessage = function(event) {
   
  var img = event.data;
  var offset = 4;
  for (var i = 0; i < img.length; i += offset){
	
	 img[i]     = 255; // red channel
	 img[i + 1] = 100; // green channel
	 img[i + 2] = 0;   // blue channel
	 img[i + 3] = 255; // alpha channel
  }

  self.postMessage(img);  

};


