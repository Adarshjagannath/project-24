
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var groundObject;
var box1,box2,box3;
var pap;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.

	
	
	box1 = new Dustbin (400,650,200,20);

	box2 = new Dustbin (500,610,10,100);

	box3 = new Dustbin (300,610,10,100);

	groundObject = new Ground(width/2,670,width,20);

	pap = new paper(200,450,40);

  
    Engine.run(engine);
}


function draw() {
  rectMode(CENTER);
  background(0);

 

  box1.display();
  box2.display();
  box3.display();

  groundObject.display();

  pap.display();

  keyPressed();

  drawSprites();
 
}

function keyPressed() {
	if (keyCode === UP_ARROW) {

	  Matter.Body.applyForce(pap.body,pap.body.position,{x:5,y:-40});
  
	}
}

