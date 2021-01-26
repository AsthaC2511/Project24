
var ground,board1,board2,board3;
var board1body,board2body,board3body;
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(1200, 400);
	
    engine = Engine.create();
	world = engine.world;

	 
	

	ground=new Ground(600,380,1200,10);
	board1=new Dustbin(920,360,220,20);
	board2=new Dustbin(1030,320,20,100);
	board3=new Dustbin(800,320,20,100);
	paper=new Paper(100,320,20,20);

    Engine.run(engine);
    
}


function draw() {
  rectMode(CENTER);
  background(0);
  //packageSprite.x= packageBody.position.x 
  //packageSprite.y= packageBody.position.y 
  board1.display();
  board2.display();
  board3.display();
  ground.display();
  paper.display();
  
  drawSprites();
 
}

function keyPressed(){
	if(keyCode === UP_ARROW){
		
		
		Matter.Body.applyForce(paper.body,paper.body.position,{x:80, y:-80});
	}
}




