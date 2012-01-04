/*
	This is the Camera object which allows for correct postion rendering of enities
	and also panning of the pre-rendered level images. Might make this a goble or singleton
	at some point, don't think I will need more viewports

	@author Ciarán McCann

*/
function Camera(initalPos,viewport){
	
	this.position = initalPos;
	this.vp = viewport;
	this.speed = 4;

	Camera.prototype.left = function(person) {

	if(person.position.x+this.position.x < (Graphics.canvas.width/2)  && this.position.x < 0)
		this.position.x += this.speed;
	};

	Camera.prototype.right = function(person) {
		if(person.position.x+this.position.x > (Graphics.canvas.width/2) && this.position.x*-1 < this.vp.w - window.innerWidth)
		this.position.x -= this.speed;
	};

	Camera.prototype.down = function(person) {
		if(person.position.y+this.position.y > (Graphics.canvas.height/2) && this.position.y < this.vp.h + window.innerHeight)
		this.position.y -= this.speed;
	};

	Camera.prototype.up = function(person) {

		if(person.position.y+this.position.y < (Graphics.canvas.height/2) && this.position.y < 0)
		this.position.y += this.speed;
	};

}