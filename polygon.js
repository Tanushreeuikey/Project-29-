class Polygon
{
    constructor(x,y,radius)
    {
        var option1=
	{    	
		isStatic:false,
		restitution:0.3,
		friction:0.5,
		density:1.2
		
    }
       this.body=Bodies.circle(x,y,radius,option1)
       this.image=loadImage("polygon.png")
       World.add(world,this.body);
    }
     
    display()
    {
        var pos =this.body.position;
       
        ellipseMode(RADIUS)
        ellipse(pos.x,pos.y,20)
        imageMode(CENTER);
        image(this.image,pos.x,pos.y,50,50);
        
    }

}