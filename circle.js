function circle(x,y,color)
{
	this.x = x; //pos x
	this.y = y;	// pos y
	this.color = color; // color , green, red etc
	
	this.infectionLvl = 0;

	function infect()
	{
		color.r++;
		color.b--;
		color.g--;
	}	
	
	function heal()
	{
		color.r--;
		color.b--;
		color.g++;
	}
	
}
