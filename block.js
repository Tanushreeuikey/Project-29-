class Block
{
    constructor(x,y,width,height)
    {
        var option=
        {
          isStatic:false,
            restitution: 1,
            friction:1,
            density:0.5
          
        }
      this.body=Bodies.rectangle(x,y,width,height,option)
      World.add(world,this.body);
      this.width= width
      this.height= height
    }

    display()
    {
       var pos =this.body.position
       push();
       translate(pos.x,pos.y);
       rotate(this.body.angle);
       rectMode(CENTER);
       fill("pink")
       strokeWeight(2)
       stroke("black")
       rect(0,0,this.width,this.height)
       pop();

    }
}