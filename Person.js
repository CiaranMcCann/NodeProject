function Person(data){		
	
		this.color = new Color(); // color , green, red etc
		this.position = new Vector2D(0,0);
		this.acceleration = new Vector2D(0,0);
		this.velocity = new Vector2D(0,0);
		this.radius = undefined;	
		this.infectionLvl = undefined;
		this.sig = undefined;
		this.name = undefined;
		this.ip = undefined;
		this.msg = undefined;
		this.timeLeftToDisplayMsg = 0;

		//makes this constructor function as a normal constructor and a copy constructor
		std.copy(this,data);
		//copy(new Person(),person);	
}


Person.prototype.infect = function(){
	if( this.color.r != 225){
		this.color.r++;
		this.color.b--;
		this.color.g--;
        		
		this.infectionLvl += 0.2;
	}
}

Person.prototype.update = function(dt, level) {

	this.updateMessage();

	this.acceleration = this.acceleration.add(this.velocity.mul(-0.2)); //firction added to player inital acc		
	// positon += velocity*dt + 0.5 * a * (t*t);

	var temppos = this.position.add(  this.velocity.mul(dt).add( this.acceleration.mul(0.5*(dt*dt)) )   );
	var x = Math.floor( (temppos.x+this.radius) /level.tileSize);
    var y = Math.floor( (temppos.y+this.radius) /level.tileSize);

    var x2 = Math.floor( (temppos.x-this.radius) /level.tileSize);
    var y2 = Math.floor( (temppos.y-this.radius) /level.tileSize);

    if(level.map[y][x] != 1 && level.map[y2][x2] != 1){
    	this.position.x = temppos.x
    	this.position.y = temppos.y
    	this.velocity = this.velocity.add(this.acceleration.mul(dt));// velocity += a * dt;

    }else{

    	//bounce slightly away from the wall, so it doesnt get stuck
    	this.velocity.x *= -0.1;
    	this.velocity.y *= -0.1;
    }

    
    // Checks for the door collisons

    if(level.map[y+1][x] instanceof Door)
     	level.map[y+1][x].open();

     if(level.map[y+2][x] instanceof Door)
     	level.map[y+2][x].open();
  
    if(level.map[y-1][x] instanceof Door)
     	level.map[y-1][x].open();

    if(level.map[y-2][x] instanceof Door)
     	level.map[y-2][x].open();


	this.acceleration.x = 0;
	this.acceleration.y = 0;	
};

Person.prototype.setCurrentMessage = function(msg) {
	this.msg = msg;
	this.timeLeftToDisplayMsg = 250;
};	

Person.prototype.updateMessage = function() {
	//decrement message display timer
	this.timeLeftToDisplayMsg--;

	if(this.timeLeftToDisplayMsg < 0){

		if(this.name == undefined)
			this.msg = this.ip;
		else
			this.msg = this.name + '  ' + this.ip;
	}
};

Person.prototype.heal = function(){

	this.color.r++;
	this.color.b++;
	this.color.g++;
}

Person.prototype.draw = function(cam){

	Graphics.drawPerson(this.position.x+cam.position.x,this.position.y+cam.position.y,this.radius, this.infectionLvl, this.color);					
	Graphics.ctx.fillStyle = "rgba("+225+","+58+","+88+","+ 0.9+")";
	std.renderWrapText(Graphics.ctx,this.msg, this.position.x+cam.position.x,this.position.y+cam.position.y-this.radius-2, 100, -12);	       	
}

Person.prototype.checkCollision = function(obj){

	var dirVector = new Vector2D(this.position.x - obj.position.x,this.position.y - obj.position.y);
	var distance = dirVector.lenght();
	
	if(distance <= this.radius+this.infectionLvl*7){

		if(obj.infectionLvl >= 0)
			this.infect();
		else if(obj.infectionLvl <= -10)
			this.heal();		
	}
}

Person.prototype.keyEvents = function(cam, socket){
	
	var movementAmount = 5;
	var needsUpdate = false;

        if(std.isKeyDown(87)){
            this.acceleration.y = -movementAmount;    			
            cam.up(this);
            needsUpdate = true;
           
        }

        if (std.isKeyDown(83)) {
            this.acceleration.y = movementAmount;               
            cam.down(this);
            needsUpdate = true;
        }

        if (std.isKeyDown(68)) {
            this.acceleration.x = movementAmount;
			cam.right(this);
			 needsUpdate = true;
        }

        if (std.isKeyDown(65)) {
            this.acceleration.x = -movementAmount;              
            cam.left(this);
        	needsUpdate = true;
        }
        
        if(needsUpdate) //&& Network.okToSendMessage('updatePerson')
        	socket.emit('updatePerson',this);
    	  	
};