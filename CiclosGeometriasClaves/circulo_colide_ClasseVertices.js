var orbitCenterX = 300;
var orbitCenterY = 300;
var orbitRadius = 200;
var angle = 0;
var speed = 0.01;
let gui; //diferença de var e let?
var hit = false; // colisao
let vert;
// Create a variable for your Checkbox
let cb1;



// textes com a classe vertice
class Vertice{
    
constructor(x,y){
this.x=x;
this.y=y;
    
    }

show(){
fill(color("lightgrey"));
circle(this.x, this.y, 30);
    
}

move() {
this.x= this.x;
this.y = this.y;
    
}
    
colide(cursor_x,cursor_y){    

hit = collideCircleCircle(cursor_x, cursor_y, 30, this.x, this.y, 30);
if(hit){ //change color!
fill(255, 0, 0);
textSize(80);
text('bang!', 220, 300);
print("bang!");
}
print("--------");
}

    
}










function setup() {
  createCanvas(600, 600);
  
vert1= new Vertice(300,100);
vert2= new Vertice(300,500);
vert3= new Vertice(100,300);
vert4= new Vertice(500,300);
    
    
gui = createGui();


  
// Create Slider.
// The last two optional arguments define the min and max (minimum and maximum) values.
// The default min and max values are 0 and 1, respectively.
  s = createSlider("Slider", 20, 20, 500, 32, 0, 0.1);
  s.setStyle({
    fillBg: color("#DDDDDD"),
    rounding: 10,
    trackWidth: 0.001
});
}
//////////////////////////////////////////////////////////////////////////////////////

function draw() {
  //background(220);
  
    
background(200,200,175);    
    
    drawGui();
    
 
  
  var cursor_x = orbitCenterX + orbitRadius * cos(angle);
  var cursor_y = orbitCenterY + orbitRadius * sin(angle);
 
    
  fill(155,155,150)
  ellipse(orbitCenterX, orbitCenterY, 400, 400);
  

    
    
    
//pontos de colisao
vert1.show();
vert1.move();
vert1.colide(cursor_x,cursor_y);
    
vert2.show();
vert2.move();
vert2.colide(cursor_x,cursor_y);

vert3.show();
vert3.move();
vert3.colide(cursor_x,cursor_y);
    
vert4.show();
vert4.move();
vert4.colide(cursor_x,cursor_y);
   
    
    
//cursor    
    fill(255);  
    circle(cursor_x, cursor_y, 30);
  
    
    
  
  angle += speed;

    
/////colide

    /*
hit = collideCircleCircle(x, y, 30, 300, 100, 30);
if(hit){ //change color!
fill(255, 0, 0);
textSize(60);
text('bang1!', 220, 550);
print("bang1");
}
print("fim");
*/
    
//hit = collideCircleCircle(x, y, 30, 300, 500, 30);
//if(hit){ //change color!
//fill(255, 0, 0);
//textSize(60);
//text('bang!2', 220, 550);
//
//}    
    
    

    
    

///////////////////////// sliders
    
  if (s.isChanged) {
    // Print a message when Slider is changed
    // that displays its value.
    print(s.label + " = " + s.val);
  }
  
  // Use Slider's value to determine where the ellipse is drawn.
  
  speed=s.val;    
      
/////////////////////////
    
    
}


/// Add these lines below sketch to prevent scrolling on mobile
function touchMoved() {
  // do some stuff
  return false;
}






