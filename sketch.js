
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
	roof= new Roof(100,150,100,650);
	bob1= new Bob(450,600,20);
	bob2= new Bob(500,600,20);
	bob3= new Bob(600,600,20);
	bob4= new Bob(650,600,20);
	bob5= new Bob(700,600,20);
	
	Engine.run(engine);
}


function draw() {
  rectMode(CENTER);
  background(0);
  
  //drawSprites();

 bob1.display();
 bob2.display();
 bob3.display();
 bob4.display();
 bob5.display();
 roof.display();
}



