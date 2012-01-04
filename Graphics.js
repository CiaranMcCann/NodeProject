/*
	This Graphics namespace controls the canvas and its context
	and a timer for animations and provides some functions for drawing
	game entitys. It also provides the requestAnimFrame

	@author Ciarán McCann

*/
var Graphics = {};

Graphics.ctx = undefined;
Graphics.canvas = undefined;
Graphics.time = 0;


 // requestAnim shim layer by Paul Irish
 window.requestAnimFrame = (function(){
          return  window.requestAnimationFrame       || 
                  window.webkitRequestAnimationFrame || 
                  window.mozRequestAnimationFrame    || 
                  window.oRequestAnimationFrame      || 
                  window.msRequestAnimationFrame     || 
                  function(/* function */ callback, /* DOMElement */ element){
                    window.setTimeout(callback, 1000 / 60);
                  };
 })();


Graphics.incermentTime = function(){
	Graphics.time++;
}

Graphics.drawPerson =function(x, y,radius, infectionLvl, color){

	//Graphics.ctx.fillStyle = "#E9EDE8";
	//Graphics.ctx.fillRect(x - radius*3, y - radius*4, radius*6, radius*6);  dirty rects
	Graphics.ctx.save();
	Graphics.ctx.fillStyle = "rgba("+color.r+","+color.g+","+color.b+","+ 0.8+")";
	Graphics.animatePulse(x,y,radius, infectionLvl, color);
	Graphics.ctx.beginPath();
    Graphics.ctx.arc(x, y, radius, 0, Math.PI * 2, true);
    Graphics.ctx.closePath();
    Graphics.ctx.stroke();
    Graphics.ctx.fill();	
    Graphics.ctx.restore();
                  		
}

Graphics.animatePulse = function(x, y,radius, infectionLvl, color){

	if(infectionLvl < 0 )
		infectionLvl = infectionLvl*-1;
	
	gap = (infectionLvl/4);
	maxR = infectionLvl;
								
	Graphics.ctx.save();       				

		for(i = 0; i <= (maxR/gap); i++)
		{						
			Graphics.ctx.strokeStyle = "rgba("+color.r+","+color.g+","+color.b+","+ 1+")";
			Graphics.ctx.lineWidth = ((maxR/gap) - i)/(gap*0.8);
			Graphics.ctx.beginPath();
			Graphics.ctx.arc(x, y, ((i*gap)/2)+(this.time/2), 0, Math.PI * 2, true);
			Graphics.ctx.closePath();
			Graphics.ctx.stroke();							
			
		}

		 if(Graphics.time >= maxR)
			Graphics.time = 1;
					
		Graphics.ctx.restore();
}

//drawn offline so the Graphics.ctx settings don't mattar
Graphics.drawWall = function(x,y,w,h){
    Graphics.ctx.strokeStyle = "#EEEEEE";
    Graphics.ctx.fillStyle = "#F3F1E5";
    Graphics.ctx.shadowOffsetX = 0;
    Graphics.ctx.shadowOffsetY = 0;
    Graphics.ctx.shadowBlur = 15;
    Graphics.ctx.shadowColor = "#BBBBBB";
    Graphics.ctx.fillStyle = "#EEEEEE";             
    Graphics.ctx.fillRect(x, y, w, h);                
}

function Color(r,g,b,a){
			
	this.r = r;
	this.g = g;
	this.b = b;	
	this.a = a;					
}