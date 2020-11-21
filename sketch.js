const Engine=Matter.Engine;
const World=Matter.World;
const Bodies=Matter.Bodies;


var engine,world,object,ball;
var ground_options={
  isStatic:true
}
var ball_o={
  restitution:1
}
function setup() {
  createCanvas(400,400);
  engine=Engine.create(); //world will be created by default
  world=engine.world;

  object=Bodies.rectangle(200,390,400,20,ground_options);
  World.add(world,object);
ball=Bodies.circle(200,200,20,ball_o)
World.add(world,ball);
 
console.log(object);

}

function draw() {
  Engine.update(engine);
  background(0);  
  fill("brown");
  rectMode(CENTER);
  rect(object.position.x,object.position.y,400,20);
  fill("skyblue");
  ellipseMode(RADIUS);
  ellipse(ball.position.x,ball.position.y,20,20)
}