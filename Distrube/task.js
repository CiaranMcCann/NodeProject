self.onmessage = function(event) {
   
		var unSortedArray=event.data;
		var tempStorage=0;
		var lenght=unSortedArray.length;
		var indexLenght=lenght-1;
		var indexPostion=0;

		for(var i=0;i<indexLenght;i++)
		{
			while((indexPostion<indexLenght)){
			   
			   if(unSortedArray[indexPostion]>unSortedArray[indexPostion+1])
			   {
				   tempStorage=unSortedArray[indexPostion];
				   unSortedArray[indexPostion]=unSortedArray[indexPostion+1];
				   unSortedArray[indexPostion+1]=tempStorage

			    }

			    indexPostion++
			}

		indexPostion=0
	}

  self.postMessage(unSortedArray);  

};


