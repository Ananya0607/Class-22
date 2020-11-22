const Engine=Matter.Engine;
const Bodies=Matter.Bodies;
const World=Matter.World;

var engine,world;
var object;
var ball;
function setup() {
  createCanvas(400,400);
engine=Engine.create();
world= engine.world;
var options={
  isStatic:true
}
var options1={
  restitution:1
}

object=Bodies.rectangle(200,390,200,20,options)
World.add(world,object);
ball=Bodies.circle(200,100,20,options1)
World.add(world,ball)
  
}

function draw() {
  background("black");
  Engine.update(engine);
    rectMode(CENTER);
    fill ("brown")
  rect(object.position.x,object.position.y,200,20);
  ellipseMode(CENTER);
  fill ("pink")
  ellipse(ball.position.x,ball.position.y,20,20)
}