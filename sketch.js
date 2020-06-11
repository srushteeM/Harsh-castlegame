const Engine=Matter.Engine;
const World=Matter.World;
const Bodies=Matter.Bodies;
var world,engine;

var play;
var play1,play2,play3,play4,play5,play6,play7,play8,play9;
var ground;

function setup() {
  createCanvas(600,600);
engine=Engine.create();
world=engine.world;
var option = {
  isStatic:true,
  friction:1.0
}
ground = Bodies.rectangle(300,560,600,30,option);
World.add(world,ground);
  play  = new Play(50,400,50,400);
  play1 = new Play(550,400,50,400);
  play2 = new Play(80,300,50,300);
  play3 = new Play(520,300,50,300);
  /*play4 = new Play(420,400,100,400);
  play5 = new Play(1100,400,100,400);
  play6 = new Play(780,400,200,195);*/
 

}

function draw() {
  Engine.update(engine);
  background(255,255,255);  
play.display();
play1.display();
play2.display();
play3.display();
/*play4.display();
play5.display();
play6.display();*/
rect(ground.position.x,ground.position.y,1200,30);
  
}
