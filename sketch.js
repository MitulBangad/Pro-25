
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var ball,rectangle,rectangle2,rectangle3;
function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.

  ball = new Ball (100,450,50,05);
  rectangle = new Bin(550, 620, 20, 100)
    rectangle2 = new Bin(635, 660, 150, 20)
  rectangle3 = new Bin(720, 620, 20, 100)
  ground = new Ground(400, 680, 800, 20);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(255);

ball.display();
  rectangle.display();
 rectangle2.display();
 rectangle3.display();
 
 ground.display();


  drawSprites();

 
}

function keyPressed(){
	if(keyCode === UP_ARROW)  {
	   Matter.Body.applyForce(ball.body, ball.body.position, 
		   {x:95, y: -95})
	}

  }

