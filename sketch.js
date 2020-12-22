var base1,ball1,ball2,ball3,ball4,ball5,rope1,rope2,rope3,rope4,rope5,backgroundImg,bl1,bl2,bl3,bl4,bl5;

const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

function preload()
{
		backgroundImg = loadImage("PROJECT BACKGROUND.png");
}

function setup() {
	createCanvas(750, 500);


	engine = Engine.create();
	world = engine.world;

   base1= new base(375,100,750,400);
   ball1= new ball(375,350,50);
   ball2= new ball(175,350,50);
   ball3= new ball(275,350,50);
   ball4= new ball(575,350,50);
   ball5= new ball(475,350,50);
   bl1=new bl(375,100,1)
   bl2=new bl(175,100,1)
   bl3=new bl(275,100,1)
   bl4=new bl(475,100,1)
   bl5=new bl(575,100,1)
   rope1= new Chain(bl1.body,ball1.body);
   rope2=new Chain(bl2.body,ball2.body);  
   rope3=new Chain(bl3.body,ball3.body);  
   rope4=new Chain(bl4.body,ball5.body); 
   rope5=new Chain(bl5.body,ball4.body);  


	Engine.run(engine);
  
}  


function draw() {
	background(backgroundImg);
  rectMode(CENTER);
 
  base1.display();
ball1.display();
ball2.display();
ball3.display();
ball4.display();
ball5.display();
bl1.display();
bl2.display();
bl3.display();
bl4.display();
bl5.display();
rope1.display();
rope2.display();
rope3.display();
rope4.display();
rope5.display();
  drawSprites();
 keypressed();
}

function keypressed(){

  if(keyCode=== UP_ARROW){
  
  Matter.Body.applyForce(ball2.body,ball2.body.position,{x:-10,y:100});
  
  
  }
  }

