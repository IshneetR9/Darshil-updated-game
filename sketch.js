const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var ground,stone,tree,boy;
var gardenImg;
var mango1,mango2,mango3,mango4,mango5,mango6,mango7,mango8;
var chain;
var mangoBodyPosition,stoneBodyPosition;

function preload()
{
	boy = loadImage("Images/boy.png");
	treeImg = loadImage("Images/tree.png");
}

function setup() {
	createCanvas(1350, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	ground = new Ground(650,640,1400,30);
  stone = new Stone(100,100,41);
  
  tree =createSprite(1050,330);
  tree.addImage(treeImg);
	
	mango1 = new mango(1010,330,40);
	mango2 = new mango(1100,330,40);
	mango3 = new mango(965,240,40);
	mango4 = new mango(1050,150,40);
	mango5 = new mango(1020,174,40);
	mango6 = new mango(1130,250,40);
	mango7 = new mango(1053,210,40);
	mango8 = new mango(1100,240,40);

  	chain = new Chain(stone.body,{x:230,y:400});
	Engine.run(engine);

}


function draw() {
  rectMode(CENTER);
  background(255);

  image(boy,200,340,200,300);
  ground.display();
  tree.display();

  stone.display();


  mango1.display();
  mango2.display();
  mango3.display();
  mango4.display();
  mango5.display();
  mango6.display();
  mango7.display();
  mango8.display();

  detectCollision(stone,mango1);
  detectCollision(stone,mango2);
  detectCollision(stone,mango3);
  detectCollision(stone,mango4);
  detectCollision(stone,mango5);
  detectCollision(stone,mango6);
  detectCollision(stone,mango7);
  detectCollision(stone,mango8);

  chain.display();
  
  fill("white");
  textSize(25);
  text("Press Space To Play Again",200,200);


}

function mouseDragged()
{
    Matter.Body.setPosition(stone.body, {x: mouseX , y: mouseY});
}

function mouseReleased()
{
   chain.fly();   
}

function keyPressed(){
  if (keyCode === 32)
  {
    chain.attach(stone.body);
  }
}
function detectCollision(lstone,lmango){
mangoBodyPosition=lmango.body.position
stoneBodyPosition=lstone.body.position

var distance = dist(stoneBodyPosition.x, stoneBodyPosition.y, mangoBodyPosition.x, mangoBodyPosition.y)
if(distance<=lmango.r+lstone.r){
  Matter.BodysetStatic(lmango.body,false);
}
  
}