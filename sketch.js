var bgImg
var snow 

function preload(){

bgImg = loadImage("snow3.jpg");
snowImg = loadImage("snow4.webp");

}


function setup() {
  createCanvas(800,400);
  createSprite(400, 200, 50, 50);

}

function draw() {
  background(bgImg);  


   spawnSnow()
   drawSprites();
}


function spawnSnow(){

if(frameCount%10 === 0) {
snow = createSprite(200,100,50,50)
snow.x = Math.round(random(100,750))
snow.velocityY= 4
snow.addImage("snow", snowImg) 
snow.scale = 0.2
}

}