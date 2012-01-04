/*
	The level object does a lot, the main thing it does is pre-renders the levels walls
	to a png image which then overlayed ontop of the canvas. Some what messy code below
	but it works for now. Rapid protoyping yea! 

	@author Ciarán McCann

*/
function level()
{
	 
	level.prototype.update = function() {
		
		this.img.style.cssText = "position:absolute;left:" + this.cam.position.x + "px;top: " + this.cam.position.y + "px; "
		this.img2.style.cssText = "position:absolute;left:" + this.cam.position.x + "px;top: " + this.cam.position.y + "px; "


		for( door in this.doors ){

			this.doors[door].update();
			//TODO - don't draw all the doors in the sence, maybe used the map array to direct index and draw only them
			this.doors[door].draw(this.cam);
		}
	};


	var o = 0;
	var w = 1;
	var d = 2;	

	this.doors = []; //this array of refences to doors is used for drawing/update - not collision checks, as a direct index is used for that
	
	this.map = [

		[w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w],
		[w,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,w,o,o,o,o,o,o,o,w,o,o,o,o,w,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,w],
		[w,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,w,o,o,o,o,o,o,o,w,o,o,o,o,w,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,w],
		[w,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,w,o,o,o,o,o,o,o,d,o,o,o,o,w,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,w],
		[w,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,w,o,o,o,o,o,o,o,d,o,o,o,o,w,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,w],
		[w,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,w,o,o,w,w,w,w,w,w,o,o,o,o,w,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,w],
		[w,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,w,o,o,w,o,o,o,o,o,o,o,o,o,w,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,w,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,w],
		[w,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,w,o,o,w,o,o,o,o,o,o,o,o,o,w,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,w,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,w],
		[w,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,w,o,o,w,o,o,o,o,o,o,o,o,o,w,o,o,w,w,w,w,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,w],
		[w,w,w,w,w,d,d,w,w,w,w,d,d,w,w,w,w,o,o,w,w,w,w,w,w,w,w,w,w,w,o,o,o,o,o,w,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,w,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,w],
		[w,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,w,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,w,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,w],
		[w,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,w,o,o,o,o,o,o,o,o,o,o,o,w,o,w,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,w],
		[w,w,w,w,d,d,w,w,w,w,o,o,w,w,w,w,w,w,w,w,w,w,w,w,w,w,o,o,o,w,w,w,o,o,w,w,o,o,o,o,o,o,o,o,o,o,o,w,o,w,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,w],
		[w,o,o,o,o,o,o,o,o,w,o,o,w,o,o,o,o,o,o,w,o,o,o,o,o,w,o,o,o,w,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,w],
		[w,o,o,o,o,o,o,o,o,w,o,o,w,o,o,o,o,o,o,w,o,o,o,o,o,w,o,o,o,w,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,w],
		[w,o,o,o,o,o,o,o,o,w,o,o,w,o,o,o,o,o,o,w,o,o,o,o,o,w,o,o,o,w,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,w],
		[w,o,o,o,o,o,o,o,o,w,o,o,w,o,o,o,o,o,o,w,o,o,o,o,o,w,o,o,o,w,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,w],
		[w,o,o,o,o,o,o,o,o,w,o,o,w,o,o,o,o,o,o,w,o,o,o,o,o,w,o,o,o,w,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,w],
		[w,o,o,o,o,o,o,o,o,o,o,o,w,o,o,o,o,o,o,w,o,o,o,o,o,w,o,o,o,w,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,w],
		[w,o,o,o,o,o,o,o,o,o,o,o,w,o,o,o,o,o,o,w,o,o,o,o,o,w,o,o,o,w,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,w],
		[w,o,o,o,o,o,o,o,o,w,o,o,w,o,o,o,o,o,o,w,o,o,o,o,o,w,o,o,o,w,o,o,o,o,o,o,o,o,o,w,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,w],
		[w,w,w,w,w,w,w,w,w,w,o,o,w,o,o,o,o,o,o,w,o,o,o,o,o,w,o,o,o,w,o,o,o,o,o,o,o,o,o,w,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,w],
		[w,o,o,o,o,o,o,o,o,o,o,o,w,w,w,w,d,d,w,w,w,w,w,d,d,w,o,o,o,w,w,w,w,w,w,w,w,w,w,w,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,w],
		[w,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,w],
		[w,o,o,o,o,o,o,o,o,w,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,w],
		[w,o,o,o,o,o,o,o,o,w,o,o,w,w,w,w,d,d,w,w,w,w,w,d,d,w,o,o,o,w,w,w,w,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,w],
		[w,o,o,o,o,o,o,o,o,w,o,o,w,o,o,o,o,o,o,w,o,o,o,o,o,w,o,o,o,w,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,w],
		[w,o,o,o,o,o,o,o,o,w,o,o,w,o,o,o,o,o,o,w,o,o,o,o,o,w,o,o,o,w,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,w],
		[w,o,o,o,o,o,o,o,o,w,o,o,w,o,o,o,o,o,o,w,o,o,o,o,o,w,o,o,o,w,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,w],
		[w,o,o,o,o,o,o,o,o,w,o,o,w,o,o,o,o,o,o,w,o,o,o,o,o,w,o,o,o,w,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,w],
		[w,w,w,w,w,w,w,w,w,w,o,o,w,o,o,o,o,o,o,w,o,o,o,o,o,w,o,o,o,w,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,w],
		[w,o,o,o,o,o,o,o,o,w,o,o,w,o,o,o,o,o,o,w,o,o,o,o,o,w,o,o,o,w,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,w],
		[w,o,o,o,o,o,o,o,o,w,o,o,w,o,o,o,o,o,o,w,o,o,o,o,o,w,o,o,o,w,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,w],
		[w,o,o,o,o,o,o,o,o,w,o,o,w,o,o,o,o,o,o,w,o,o,o,o,o,w,o,o,o,w,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,w],
		[w,o,o,o,o,o,o,o,o,w,o,o,w,o,o,o,o,o,o,w,o,o,o,o,o,w,o,o,o,w,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,w],
		[w,o,o,o,o,o,o,o,o,w,o,o,w,o,o,o,o,o,o,w,o,o,o,o,o,w,o,o,o,w,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,w],
		[w,o,o,o,w,w,w,w,w,w,o,o,w,w,w,w,w,o,o,w,o,o,o,o,o,w,o,o,o,w,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,w],
		[w,o,o,o,w,o,o,o,o,o,o,o,o,o,o,o,w,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,w],
		[w,o,o,o,w,o,o,o,o,o,o,o,o,o,o,o,w,o,o,o,o,o,o,o,o,w,o,o,o,w,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,w],
		[w,o,o,o,w,o,o,o,o,o,o,o,o,o,o,o,w,w,w,w,o,o,o,o,o,w,o,o,o,w,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,w],
		[w,o,o,o,w,o,o,o,o,o,o,o,o,o,o,o,w,o,o,w,o,o,o,o,o,w,o,o,o,w,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,w],
		[w,o,o,o,w,w,w,w,w,w,o,o,w,w,w,w,w,o,o,w,o,o,o,o,o,w,o,o,o,w,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,w],
		[w,o,o,o,o,o,o,o,o,w,o,o,w,o,o,o,o,o,o,w,o,o,o,o,o,w,o,o,o,w,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,w],
		[w,o,o,o,o,o,o,o,o,w,w,w,w,o,o,o,o,o,o,w,o,o,o,o,o,w,o,o,o,w,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,w],
		[o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o],
		[w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w],
		[o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o],



	]

	this.height = this.map.length; 
	this.width = this.map[0].length; 
	this.tileSize = 40;	
	this.canvas = document.createElement('canvas');
	this.canvas.style.cssText =	"position:absolute;left:3px;top:3px; "
	this.canvas.width = this.width*this.tileSize;
    this.canvas.height = this.height*this.tileSize; 
    this.cam = new Camera(new Vector2D(0,0),{h:this.height*this.tileSize,w:this.width*this.tileSize});
    this.img = new Image();
    this.img2 = new Image();

    	var ctx = this.canvas.getContext("2d");
		console.log('Inital draw');

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
	
var div = document.createElement('div');
div.style.cssText ="position:absolute;left:0px;top:0px;overflow:hidden;width: " + window.innerWidth + "px;height: " + window.innerHeight + "px";

div.appendChild(this.img);
this.img2.src = this.img.src;
this.img2.style.cssText ="position:absolute;left:-3px;top:-3px;"
div.appendChild(this.img2);

document.body.appendChild(div);

		 
	// Now time to id doors in the level and generate them

	for (var y = 0; y < this.height; ++y) {
			for (var x = 0; x < this.width; ++x) {

					
					if( this.map[y][x] == d && this.map[y][x+1] == d){
						//horazontail door
						this.map[y][x] = new Door(x*this.tileSize, y*this.tileSize, this.tileSize, "horzontail",-1, null);
						this.map[y][x+1] = new Door(x*this.tileSize + this.tileSize, y*this.tileSize, this.tileSize, "horzontail",1, this.map[y][x]);
						this.map[y][x].partenerDoor = this.map[y][x+1];

						this.doors.push(this.map[y][x]);
						this.doors.push(this.map[y][x+1]);
					}

			}
	}
	
}
