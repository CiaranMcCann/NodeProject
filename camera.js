function Camera(initalPos,viewport){
	
	this.position = initalPos;
	this.vp = viewport;
	this.speed = 3;

	Camera.prototype.left = function() {
		this.position.x -= this.speed;
	};

	Camera.prototype.right = function() {
		this.position.x += this.speed;
	};

	Camera.prototype.down = function() {
		this.position.y -= this.speed;
	};

	Camera.prototype.up = function() {
		this.position.y += this.speed;
	};

}