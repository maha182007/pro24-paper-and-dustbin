var options={
	isStatic:false,
	restitution:0.3,
	friction:0.5,
	density:1.2
}

var side1Sprite,side2Sprite,side3Sprite,ground,waste

const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.

	
	waste=Bodies.circle(300,5,10)
	
	
	groundSprite=createSprite(400,667,900,20)
	groundSprite.shapeColor=color(75)

    side1Sprite=createSprite(640,595,20,150)
	side2Sprite=createSprite(750,595,20,150)
	side3Sprite=createSprite(690,660,100,20)

	




	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  ellipse(waste.position.x,waste.position.y,1,1);
  
  drawSprites();
 
}



