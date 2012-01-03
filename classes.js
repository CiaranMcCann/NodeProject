	function Person(data)
	{			
			this.color = new Color(); // color , green, red etc
			this.graphics = new Graphics();
			this.position = new Vector2D(0,0);
			this.acceleration = new Vector2D(0,0);
			this.velocity = new Vector2D(0,0);
			this.radius = undefined;	
			this.infectionLvl = undefined;
			this.sig = undefined;
			this.ip = undefined;

			this.directionX = 0;
			this.directionY = 0;

			//makes this constructor function as a normal constructor and a copy constructor
			std.copy(this,data);
			//copy(new Person(),person);	
	}


	Person.prototype.infect = function()
	{
		if( this.color.r != 225)
		{
			this.color.r++;
			this.color.b--;
			this.color.g--;
	        		
			this.infectionLvl += 0.2;
		}
	}
	
	Person.prototype.update = function(dt, level) {
		
		this.acceleration = this.acceleration.add(this.velocity.mul(-0.4)); //firction added to player inital acc		
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

		this.acceleration.x = 0;
		this.acceleration.y = 0;


		
	};	
	
	Person.prototype.heal =  function()
	{
		this.color.r++;
		this.color.b++;
		this.color.g++;
	}
	
	Person.prototype.draw = function(cam)
	{
		this.graphics.drawPerson(this.position.x+cam.position.x,this.position.y+cam.position.y,this.radius, this.infectionLvl, this.color);
						
		context.save();
		context.fillStyle = "rgba("+88+","+88+","+88+","+ 0.5+")";
		context.font  = '10px helvetica';
		context.fillText(this.ip, this.position.x+cam.position.x - this.radius*2,this.position.y+cam.position.y - this.radius*2);
		context.restore();	
            	
	}
	
	Person.prototype.checkCollision = function(obj)
	{
		var dirVector = new Vector2D(this.position.x - obj.position.x,this.position.y - obj.position.y);
		var distance = dirVector.lenght();
		
		if(distance <= this.radius+this.infectionLvl*7)
		{
			if(obj.infectionLvl >= 0)
				this.infect();
			else if(obj.infectionLvl <= -10)
				this.heal();
			
		}
	}

	Person.prototype.keyEvents = function(cam, socket){
		
		var movementAmount = 9;
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
            
            if(needsUpdate)
             socket.emit('updatePerson',this);  	
	};


function Color(r,g,b,a) {
			
			this.r = r;
			this.g = g;
			this.b = b;	
			this.a = a;					
}


function Graphics()
{
			this.time = 0;
	
			Graphics.prototype.incermentTime = function()
			{
				this.time++;
			}
	
			Graphics.prototype.drawPerson =function(x, y,radius, infectionLvl, color)
            {
				context.save();
				context.fillStyle = "rgba("+color.r+","+color.g+","+color.b+","+ 0.8+")";
				this.animatePulse(x,y,radius, infectionLvl, color);
				context.beginPath();
                context.arc(x, y, radius, 0, Math.PI * 2, true);
                context.closePath();
                context.stroke();
                context.fill();	
                context.restore();
                              		
			}
			
			Graphics.prototype.animatePulse = function(x, y,radius, infectionLvl, color)
            {
				if(infectionLvl < 0 )
					infectionLvl = infectionLvl*-1;
				
				gap = (infectionLvl/4);
				maxR = infectionLvl;
											
				context.save();       				
			
					for(i = 0; i <= (maxR/gap); i++)
					{						
						context.strokeStyle = "rgba("+color.r+","+color.g+","+color.b+","+ 1+")";
						context.lineWidth = ((maxR/gap) - i)/(gap*0.8);
						context.beginPath();
						context.arc(x, y, ((i*gap)/2)+(this.time/2), 0, Math.PI * 2, true);
						context.closePath();
						context.stroke();							
						
					}

					 if(this.time >= maxR)
						this.time = 1;
								
					context.restore();
			}
			
			//drawn offline so the context settings don't mattar
			Graphics.prototype.drawWall = function(x,y,w,h){
                context.strokeStyle = "#EEEEEE";
                context.fillStyle = "#F3F1E5";
                context.shadowOffsetX = 0;
                context.shadowOffsetY = 0;
                context.shadowBlur = 15;
                context.shadowColor = "#BBBBBB";
                context.fillStyle = "#EEEEEE";             
                context.fillRect(x, y, w, h);                
            }
}

