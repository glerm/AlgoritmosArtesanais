var orbitCenterX = 300;
var orbitCenterY = 300;
var orbitRadius = 200;
var angle = 0;
var speed = 0.01;
let gui; //diferença de var e let?
var hit = false; // colisao


// Create a variable for your Checkbox
let cb1;

function setup() {
  createCanvas(600, 600);
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

function draw() {
  //background(220);
  
    
background(200,200,175);    
    
    drawGui();
    

    
  
  
  var x = orbitCenterX + orbitRadius * cos(angle);
  var y = orbitCenterY + orbitRadius * sin(angle);
 
    
  fill(155,155,150)
  ellipse(orbitCenterX, orbitCenterY, 400, 400);
  
  
//pontos de colisao
    fill(color("blue"));
    circle(300, 100, 30);
    fill(color("yellow"));
    circle(300, 500, 30);
   
    
    
//cursor    
    fill(255);  
    circle(x, y, 30);
  
    
    
  
  angle += speed;

    
/////colide

hit = collideCircleCircle(x, y, 30, 300, 100, 30);
if(hit){ //change color!
fill(255, 0, 0);
textSize(60);
text('bang1!', 220, 550);
print("bang1");
}
print("fim");

    
hit = collideCircleCircle(x, y, 30, 300, 500, 30);
if(hit){ //change color!
fill(255, 0, 0);
textSize(60);
text('bang!2', 220, 550);

}    
    
    

    
    

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