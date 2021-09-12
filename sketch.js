var  path
var  pathImg
var runner
var runnerImg
var i;
var leftBoundary
var rightBoundary
function preload(){
  //pre-load images

pathImg = loadImage("path.png");
runnerImg = loadAnimation("Runner-1.png","Runner-2.png")
}

function setup(){
  createCanvas(400,400);
  //create sprites here

  path = createSprite(200,200,200,200);
  path.addImage(pathImg);
path.velocityY = 4; 
path.scale=1.5;
  
  runner = createSprite(100,300,50,50);
  runner.addAnimation("running",runnerImg);
runner.scale = 0.1; 

 leftBoundary = createSprite(25,200,20,400);
leftBoundary.shapeColor="white"

 rightBoundary = createSprite(380,200,20,400);
  rightBoundary.shapeColor="white"
}

function draw() {
  runner.x = World.mouseX;
  
  edges= createEdgeSprites()
  runner.collide(edges[3]);
  runner.bounceOff(leftBoundary);
  runner.bounceOff(rightBoundary);


  if(path.y > 400){
    path.y = height/2;
  }

  
  drawSprites();


  if (runner.isTouching(leftBoundary)){
    runner.x = 100

  }
}

