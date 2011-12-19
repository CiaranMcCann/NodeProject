function Person(x,y,radius,color,infectionLvl, graphics)
{
	this.color = color; // color , green, red etc
	this.graphics = graphics;
	this.position = new Vector2D(x,y);
	this.radius = radius;
	
	this.infectionLvl = infectionLvl;

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
	
	Person.prototype.draw = function()
	{
		this.graphics.drawPerson(this.position.x,this.position.y,this.radius, this.infectionLvl, this.color);
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
