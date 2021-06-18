class Paper
{
	constructor(x,y)
	{
        var options ={
            isStaic: false,
            restitution: 0.3,
            friction: 0,
            density: 1.2
        }

		this.x=x;
		this.y=y;
		
		this.image=loadImage("paper.png");
        this. width = x;
        this . height = y;
	}
	display()
	{
			push()
			imageMode(CENTER);
            fill(blue);
			pop()
			
	}

}