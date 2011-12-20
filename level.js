
function level()
{

	var o = 0;
	var w = 1;	
	
	this.map = [

		[w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w],
		[w,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,w,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,w],
		[w,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,w,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,w],
		[w,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,w,o,o,w,w,w,w,w,w,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,w],
		[w,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,w,o,o,w,o,o,o,o,w,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,w],
		[w,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,w,o,o,w,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,w],
		[w,w,w,w,w,o,o,w,w,w,w,o,o,w,w,w,w,o,o,w,w,w,w,w,w,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,w],
		[w,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,w],
		[w,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,w],
		[w,w,w,w,o,o,w,w,w,w,o,o,w,w,w,w,w,w,w,w,w,w,w,w,w,w,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,w],
		[w,o,o,o,o,o,o,o,o,w,o,o,w,o,o,o,o,o,o,w,o,o,o,o,o,w,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,w],
		[w,o,o,o,o,o,o,o,o,w,o,o,w,o,o,o,o,o,o,w,o,o,o,o,o,w,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,w],
		[w,o,o,o,o,o,o,o,o,w,o,o,w,o,o,o,o,o,o,w,o,o,o,o,o,w,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,w],
		[w,o,o,o,o,o,o,o,o,w,o,o,w,o,o,o,o,o,o,w,o,o,o,o,o,w,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,w],
		[w,o,o,o,o,o,o,o,o,w,o,o,w,o,o,o,o,o,o,w,o,o,o,o,o,w,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,w],
		[w,o,o,o,o,o,o,o,o,o,o,o,w,o,o,o,o,o,o,w,o,o,o,o,o,w,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,w],
		[w,o,o,o,o,o,o,o,o,o,o,o,w,o,o,o,o,o,o,w,o,o,o,o,o,w,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,w],
		[w,o,o,o,o,o,o,o,o,w,o,o,w,o,o,o,o,o,o,w,o,o,o,o,o,w,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,w],
		[w,w,w,w,w,w,w,w,w,w,o,o,w,o,o,o,o,o,o,w,o,o,o,o,o,w,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,w],
		[w,o,o,o,o,o,o,o,o,o,o,o,w,w,w,w,o,o,w,w,w,w,w,o,o,w,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,w],
		[w,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,w],
		[w,o,o,o,o,o,o,o,o,w,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,w],
		[w,o,o,o,o,o,o,o,o,w,o,o,w,w,w,w,o,o,w,w,w,w,w,o,o,w,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,w],
		[w,o,o,o,o,o,o,o,o,w,o,o,w,o,o,o,o,o,o,w,o,o,o,o,o,w,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,w],
		[w,o,o,o,o,o,o,o,o,w,o,o,w,o,o,o,o,o,o,w,o,o,o,o,o,w,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,w],
		[w,o,o,o,o,o,o,o,o,w,o,o,w,o,o,o,o,o,o,w,o,o,o,o,o,w,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,w],
		[w,o,o,o,o,o,o,o,o,w,o,o,w,o,o,o,o,o,o,w,o,o,o,o,o,w,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,w],
		[w,o,o,o,o,o,o,o,o,w,o,o,w,o,o,o,o,o,o,w,o,o,o,o,o,w,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,w],
		[w,o,o,o,o,o,o,o,o,w,o,o,w,o,o,o,o,o,o,w,o,o,o,o,o,w,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,w],
		[o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o],

	]

	this.height = this.map.length; 
	this.width = this.map[0].length; 
	this.tileSize = 40;	
	this.canvas = document.createElement('canvas');
	this.canvas.style.cssText =	"position:absolute;left:3px;top:3px; "
	this.canvas.width = this.width*this.tileSize;
    this.canvas.height = this.height*this.tileSize; 
    document.body.appendChild(this.canvas);
    this.img = new Image();


		console.log('Inital draw');
		var ctx = this.canvas.getContext("2d");
		ctx.strokeStyle = "#EEEEEE";
        ctx.fillStyle = "#FF0000";
        ctx.shadowOffsetX = 0;
        ctx.shadowOffsetY = 0;
        ctx.shadowBlur = 12;
        ctx.shadowColor = "#BBBBBB";                             
        ctx.fillStyle = "#EEEEEE";

		for (var y = 0; y < this.height; ++y) {
			for (var x = 0; x < this.width; ++x) {

				if( this.map[y][x] == 1){

					//ctx.fillRect(x*this.tileSize,y*this.tileSize,this.tileSize, this.tileSize);
					
					var left = this.map[y][x-1];
					var right = this.map[y][x+1];


					if(left != 1)
					ctx.beginPath()

						ctx.moveTo(x*this.tileSize,y*this.tileSize)
						ctx.lineTo(x*this.tileSize+this.tileSize,y*this.tileSize)
						ctx.lineTo(x*this.tileSize+this.tileSize,y*this.tileSize+this.tileSize)
						ctx.lineTo(x*this.tileSize,y*this.tileSize+this.tileSize)
						ctx.lineTo(x*this.tileSize,y*this.tileSize)

					if(right != 1){
						
						ctx.closePath();
						ctx.fill();
					}

						
				}
			}			
		}


	for (var x = 0; x < this.width; ++x) {
		for (var y = 0; y < this.height; ++y) {
	

				if( this.map[y][x] == 1){
					
					var down = this.map[y+1][x];
					var top = (y == 0) ? 0 : this.map[y-1][x];


					if(top != 1)
					ctx.beginPath()

					if(top == 1 || down == 1){
						ctx.moveTo(x*this.tileSize,y*this.tileSize)
						ctx.lineTo(x*this.tileSize+this.tileSize,y*this.tileSize)
						ctx.lineTo(x*this.tileSize+this.tileSize,y*this.tileSize+this.tileSize)
						ctx.lineTo(x*this.tileSize,y*this.tileSize+this.tileSize)
						ctx.lineTo(x*this.tileSize,y*this.tileSize)
					}

					if(down != 1){
						
						ctx.closePath();
						ctx.fill();
					}

						
				}
			}			
		}



		var g = this.canvas.toDataURL();
		this.img.src = g

	this.img.style.cssText ="position:absolute;left:0px;top:0px;"
   document.body.appendChild(this.img);
		 
	

	
}
