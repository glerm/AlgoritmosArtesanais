var orbitCenterX = 300;
var orbitCenterY = 300;
var orbitRadius = 200;
var angle = 0;
var speed = 0.01;

function setup() { 
  createCanvas(600, 600);
} 

function draw() { 
  background(200,200,175);
  
  var x = orbitCenterX + orbitRadius * cos(angle);
  var y = orbitCenterY + orbitRadius * sin(angle);
  
  ellipse(orbitCenterX, orbitCenterY, 400, 400);
  fill(155,155,150)
  ellipse(x, y, 30, 30);
  fill(100);
  
  angle += speed;
}