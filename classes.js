	function Person(data)
	{			
			this.color = new Color(); // color , green, red etc
			this.graphics = new Graphics();
			this.position = new Vector2D();
			this.radius = undefined;	
			this.infectionLvl = undefined;
			this.sig = undefined;
			this.ip = undefined;

			copy(this,data);	
			//copy(new Person(),person);	
	}

	//Allows for the copying of Object types into their proper types, used for copy constructer
	//for objects that are sent over the network. I have intergrated this function, into
	// the constructor of the Person object so it acts like C-style copy construction
	// WARNING: This creates a deep copy, so reference are not preserved
	function copy(newObject, oldObject) {
		for( member in oldObject )
		{
			// if the member is itself an object, then we most also call copy on that
			if( typeof(oldObject[member]) == "object" )
			{
				newObject[member] = copy(newObject[member],oldObject[member])
			}else{
				// if its a primative member just assign it
				newObject[member] = oldObject[member];
			}			
		}
		return newObject;
	};


	/*function Person(person)
	{
		this = copy(new Person(),person);
	}
	*/


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
		
		if(distance <= this.radius+this.infectionLvl)
		{
			if(obj.infectionLvl >= 0)
			this.infect();
			else if(obj.infectionLvl <= -10)
			this.heal();
			
		}
	}





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
				context.shadowOffsetX = 0;
                context.shadowOffsetY = 0;
                context.shadowBlur = 0;
        				
			
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


function Vector2D(x,y)
{
	this.x = x;
	this.y = y;
	
	Vector2D.prototype.lenght = function()
	{
		return Math.sqrt((this.x*this.x)+(this.y*this.y));
	}
}
