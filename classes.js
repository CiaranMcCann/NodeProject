	var Graphics = {};
	Graphics.time = 0;


				  // requestAnim shim layer by Paul Irish
	Graphic.requestAnimFrame = (function(){
	          return  window.requestAnimationFrame       || 
	                  window.webkitRequestAnimationFrame || 
	                  window.mozRequestAnimationFrame    || 
	                  window.oRequestAnimationFrame      || 
	                  window.msRequestAnimationFrame     || 
	                  function(/* function */ callback, /* DOMElement */ element){
	                    window.setTimeout(callback, 1000 / 60);
	                  };
	  })();
		
	Graphics.incermentTime = function()
	{
		Graphics.time++;
	}
	
	Graphics.drawPerson =function(x, y,radius, infectionLvl, color)
    {

    	//context.fillStyle = "#E9EDE8";
    	//context.fillRect(x - radius*3, y - radius*4, radius*6, radius*6);  dirty rects
		context.save();
		context.fillStyle = "rgba("+color.r+","+color.g+","+color.b+","+ 0.8+")";
		Graphics.animatePulse(x,y,radius, infectionLvl, color);
		context.beginPath();
        context.arc(x, y, radius, 0, Math.PI * 2, true);
        context.closePath();
        context.stroke();
        context.fill();	
        context.restore();
                      		
	}
	
	Graphics.animatePulse = function(x, y,radius, infectionLvl, color)
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

			 if(Graphics.time >= maxR)
				Graphics.time = 1;
						
			context.restore();
	}
	
	//drawn offline so the context settings don't mattar
	Graphics.drawWall = function(x,y,w,h){
        context.strokeStyle = "#EEEEEE";
        context.fillStyle = "#F3F1E5";
        context.shadowOffsetX = 0;
        context.shadowOffsetY = 0;
        context.shadowBlur = 15;
        context.shadowColor = "#BBBBBB";
        context.fillStyle = "#EEEEEE";             
        context.fillRect(x, y, w, h);                
    }

	function Color(r,g,b,a) {
				
				this.r = r;
				this.g = g;
				this.b = b;	
				this.a = a;					
	}