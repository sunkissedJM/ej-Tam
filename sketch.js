
var btn;

function setup() {
  createCanvas(windowWidth, windowHeight);
  
background(random(0,225),random(0,225),random(0,225));
  btn = createButton('descargar');
  btn.position(10,10);
  btn.mousePressed(artemania);
}

function draw() {
 
  fill(random(0,225),random(0,225),random(0,225))
  triangle(mouseX, mouseY, mouseX+20, mouseY+20,mouseX-20, mouseY+20);
}
function artemania() {
saveCanvas("imagen", "jpg");

}