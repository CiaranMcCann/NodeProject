function Door(x,y,tileSize,orientation,openDirection,partenerDoor){
		
	var horzontail = "horzontail";
	var vertical = "vertical";

	this.width = tileSize;
	this.height = tileSize/2;	
	this.isOpening = false;
	this.orientation = orientation;
	this.openDirection = openDirection;
	this.speed = 0.6;
	this.partenerDoor = partenerDoor;

	if(orientation == horzontail){
		this.pos = new Vector2D(x,y+(tileSize/4));
		this.initalPos = std.copy(new Vector2D(0,0), this.pos);
	}

	if(orientation == vertical){
		
	}

	Door.prototype.open = function() {
		
		if(this.isOpening == true)
			return;	

		this.isOpening = true;
		this.partenerDoor.open();
	};

	Door.prototype.draw = function(cam) {

		Graphics.ctx.fillStyle = "#BBBBBB";  

		//Graphics.context.lineWidth   = 0.5;           
        Graphics.ctx.fillRect(this.pos.x+cam.position.x, this.pos.y+cam.position.y, this.width, this.height);
        Graphics.ctx.strokeRect(this.pos.x+cam.position.x, this.pos.y+cam.position.y, this.width, this.height);
	};

	Door.prototype.update = function(){
		
		if(this.isOpening){

			//if orination is horzontial move in x direction and don't move anymoe if door is completely open
			if(this.orientation == horzontail && (this.pos.x - this.initalPos.x)*this.openDirection <= this.width){
				this.pos.x += this.openDirection*this.speed;
			}else{
				this.isOpening = false;
			}

		} 

		//If the door is graphic door is open and the opening varible is now false, close the graphical door
		if(!this.isOpening){

			//if orination is horzontial move in x direction and don't move anymoe if door is completely open
			if(this.orientation == horzontail && (this.pos.x - this.initalPos.x)*this.openDirection >= 0){
				this.pos.x -= this.openDirection*this.speed;
			}
		}
	};
}