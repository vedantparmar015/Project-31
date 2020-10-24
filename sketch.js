const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;


function setup() {
  createCanvas(480,800);
  createSprite(400, 200, 50, 50);
}
var particles = [];
var plinkos = [];
var divisions = [];
var divisionHeight=300;
function draw() {
  background(255,255,255);  
  ground = new Ground(470,400,480,20)

  if(frameCount%60===0){
    particles.push(new Particle(random(width/2-10, width/2+10),10,10));
  }

  for (var k = 0; k<=width; k=k+80){
    divisions.push(new Divisions(k, height-divisionHeight/2,10, divisionHeight))
  }

  for(var j = 40; j <=width; j = j+50){
    plinkos.push(new Plinko(j,75));
  }

  for(var j = 15; j <=width-10; j = j+50){
    plinkos.push(new Plinko(j,175));
  }

  for(var j = -10; j <=width-20; j = j+50){
    plinkos.push(new Plinko(j,275));
  }
  for(var j = -45; j <=width; j = j+50){
    plinkos.push(new Plinko(j,375));
  }

  for (var j = 0; j <particles.length;j++){
    particles[j].display();
  }

  for(var k= 0; k<divisions.length;k++){
    divisions[k].display();
  }
  ground.display();
  drawSprites();
}