const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var engine,body;
var ground,ball;






function setup() {
  createCanvas(800,400);

  engine = Engine.create();
  world= engine.world;
var ground_options = {
    isStatic:true
}
ground = Bodies.rectangle(0,380,800,20,ground_options);
World.add(world,ground);
}

function draw() {
  background(0);  
  Engine.update(engine);

  rect(ground.position.x,ground.position.y,800,20);
  drawSprites();
}