
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var ball
var ground,right,left
function preload()
{
	
}

function setup() {
	createCanvas(800, 700);
	var ball_options = {
		isStatic:false,
		restitution:0.3,
		friction:0,
		density:1.2,
	}


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	ball = Matter.Bodies.circle(100,100,20,ball_options)
	ground = new Ground(width/2,670,width,20);
	right = new Ground(700,600,20,120);
	left = new Ground(500,600,20,120);


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  ground.show()
  right.show()
  left.show()
  Engine.update(engine)
  ellipse(ball.position.x,ball.position.y,20)
  drawSprites();
 
}
function keyPressed(){
	if (keyCode === UP_ARROW){
		Matter.Body.applyForce(ball,{x:0,y:0},{x:0,y:-0.05})
	}
}


