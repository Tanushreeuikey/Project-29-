
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;


var box1,box2,box3,ground,ball,paper;

function preload()
{

}

function setup()
 {
	createCanvas(1200, 700);


	engine = Engine.create();
	world = engine.world;
	 
	ground = new Ground(600,height-30,1300,20)
    ground1=new Ground(600,450,400,10)
	ground2=new Ground(800,200,400,10)

	//first
	block1= new Block(600,410,40,70);
	block2= new Block(550,410,40,70);
	block3= new Block(500,410,40,70);
	block4= new Block(650,410,40,70);
	block5= new Block(700,410,40,70);
	//second
	block6= new Block(610,360,40,70)
	block7= new Block(560,360,40,70)
	block8= new Block(510,360,40,70)
	block9= new Block(660,360,40,70)
	//third
    block10= new Block(625,310,40,70)
	block11= new Block(570,310,40,70)
	block12= new Block(520,310,40,70)

	//first
	block13= new Block(800,190,40,60)
	block14= new Block(760,190,40,60)
	block15= new Block(720,190,40,60)
	block16= new Block(850,190,40,60)
	block17= new Block(890,190,40,60)
    //second
	block18= new Block(800,180,30,60)
	block19= new Block(800,180,30,60)
	block20= new Block(800,180,30,60)
	block21= new Block(800,180,30,60)
    //third
	block22= new Block(800,180,30,60)
	block23= new Block(800,180,30,60)
	block24= new Block(800,180,30,60)

	 polygon=new Polygon(30,40,20)
     slingShot=new SlingShot(polygon.body,{x:150,y:200})

	 //Engine.run(engine);
  
}


function draw() 
{
background(225)
Engine.update(engine);
rectMode(CENTER);

ground.display();
ground1.display();
ground2.display();

block1.display()
block2.display()
block3.display()
block4.display()
block5.display()
block6.display()
block7.display()
block8.display()
block9.display()
block10.display()
block11.display()
block12.display()




polygon.display();
slingShot.display();


   
  drawSprites();
 
}
function mouseDragged(){
    Matter.Body.setPosition(polygon.body, {x: mouseX , y: mouseY});
}


function mouseReleased(){
    slingShot.fly();
}
