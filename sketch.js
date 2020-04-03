var sun , p1 , p2 , p3 , p4;

var p1img , p2img , p3img , p4img , sunimg;
var angle;
var as = 0.2;
var sunRadius;

function preload() {
p1img = loadImage ("p1.jpeg");
p2img = loadImage ("p2.jpg");
p3img = loadImage ("p3.jpg");
p4img = loadImage ("p4.jpg");
sunimg = loadImage ("sun.jpg");

}

function setup() {
  createCanvas(800,800);
  sun = createSprite(0,0);
  sun.addImage("sun",sunimg);
  sun.scale = 0.3;
sun.setCollider("circle",-85,-60,140);
sun.debug = false;

p1 = createSprite(-200,-100);
p1.addImage ("p1",p1img);
p1.scale = 0.1;
p1.setCollider("circle",70,50,300);
p1.debug = false;

p2 = createSprite(210,60);
p2.addImage("p2",p2img);
p2.scale = 0.15;
p2.setCollider("circle",210,60,300);
p2.debug = false;

p3 = createSprite (-250,-20);
p3.addImage("p3",p3img);
p3.scale = 0.22;
p3.setCollider("circle",250,50,300);
p3.debug = false;

p4 = createSprite(30,220);
p4.addImage("p4",p4img);
p4.scale = 0.2;
p4.setCollider("circle",30,220,300);
p4.debug = false;

}

function draw() {
  background(0); 
  
  angleMode(DEGREES);
  translate(width/2,height/2);
  rotate(angle);

  if (sun.collide(p1)) {
    p1.destroy();
  }

  if (sun.collide(p2)) {
    p2.destroy();
  }

  if (sun.collide(p3)) {
    p3.destroy();
  }

  if (sun.collide(p4)) {
    p4.destroy();
  }

  angle = angle + as;
  if (frameCount % 1 === 0) {
    sun.scale = sun.scale + 0.01;
  }

  drawSprites();
}