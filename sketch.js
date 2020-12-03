const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var polygon,slingshot,stone,mango,tree;
function preload() {
    
}

function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;
    boy=new Boy(250,300,100,100);
    stone=new Stone(200,200,20,20);
    tree=new Tree(800,200,190,350)
    slingshot=new Chain(stone.body,{x:100,y:200})
    ground=new Ground(600,390,1200,10);
    mango1=new Mango(750,80,40,40);
    mango2=new Mango(730,140,40,40);
    mango3=new Mango(790,120,40,40);
    mango4=new Mango(820,60,40,40);
    mango5=new Mango(840,160,40,40);
   
}

    
   

function draw(){
  background("brown");
    Engine.update(engine);
    stone.display();
    ground.display();
    tree.display();
    mango1.display();
    mango2.display();
    mango3.display();
    mango4.display();
    mango5.display();
    detectCollision(stone.body,mango1.body);
    detectCollision(stone.body,mango2.body);
    detectCollision(stone.body,mango3.body);
    detectCollision(stone.body,mango4.body);
    detectCollision(stone.body,mango5.body);

    slingshot.display();
    
}

function mouseDragged(){
    Matter.Body.setPosition(stone.body, {x: mouseX , y: mouseY});
}
function mouseReleased(){
  slingshot.detached();
}

function detectCollision(movingRect,fixedRect){
  if (movingRect.position.x - fixedRect.position.x <30
    && fixedRect.position.x - movingRect.position.x < 30
    && movingRect.position.y - fixedRect.position.y < 30
    && fixedRect.position.y - movingRect.position.y < 30) {
      
      console.log("collision detected");
      Matter.Body.setStatic(fixedRect,false);
}
}