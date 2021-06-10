// creating the constant
var PLAY = 1;
var END = 0;
var gameState = PLAY;

// creating the variables
var bow , arrow,  scene;
var bowImage, arrowImage, green_balloonImage, red_balloonImage, pink_balloonImage ,blue_balloonImage, backgroundImage;

var red,blue,green,pink;

var score=0;

function preload(){
  
//loading the images
  backgroundImage = loadImage("background0.png");
  arrowImage = loadImage("arrow0.png");
  bowImage = loadImage("bow0.png");
  red_balloonImage = loadImage("red_balloon0.png");
  green_balloonImage = loadImage("green_balloon0.png");
  pink_balloonImage = loadImage("pink_balloon0.png");
  blue_balloonImage = loadImage("blue_balloon0.png");
  
}

function setup() {
  createCanvas(400, 400);
  
//creating background
  scene = createSprite(0,0,400,400);
  scene.addImage(backgroundImage);
  scene.scale = 2.5
  
// creating bow to shoot arrow
  bow = createSprite(380,220,20,50);
  bow.addImage(bowImage); 
  bow.scale = 1;
  
   score = 0;
// Adding the groups
    redGroup   = new Group();
    greenGroup = new Group();
    blueGroup  = new Group();
    pinkGroup  = new Group();
    arrowGroup = new Group();
}

function draw() {
 background(0);
// moving ground
    scene.velocityX = -3 

// Creating the infinity background
    if (scene.x < 0){
      scene.x = scene.width/2;
    }
// Creating the conditions
   if (arrowGroup.isTouching(redGroup)) {
    redGroup.destroyEach();
    arrowGroup.destroyEach();
    score = score -15  ;
  }
  
   if (arrowGroup.isTouching(blueGroup)) {
    blueGroup.destroyEach();
    arrowGroup.destroyEach();
    score = score + 30;
  }
  
  if (arrowGroup.isTouching(greenGroup)) {
    greenGroup.destroyEach();
    arrowGroup.destroyEach();
    score = score + 20;
  }
  
  if (arrowGroup.isTouching(pinkGroup)) {
    pinkGroup.destroyEach();
    arrowGroup.destroyEach();
    score = score + 10;
  }

//moving bow
  bow.y = World.mouseY
  
// release arrow when space key is pressed
  if (keyDown("space")) {
    createArrow();
  }
   
// Creating continous enemies
  var select_balloon = Math.round(random(1,4));
  
// Giving random balloons at random positions 
  if (World.frameCount % 20 == 0) {
    if (select_balloon == 1) {
      redBalloon();
    } else if (select_balloon == 2) {
      greenBalloon();
    } else if (select_balloon == 3) {
      blueBalloon();
    } else {
      pinkBalloon();
    }
  }  
    
   drawSprites();
  
// Creating the scores
  text("Score: "+ score, 300,50);
}


// Creating  arrows for bow
 function createArrow() {
  arrow= createSprite(100, 100, 60, 10);
  arrow.addImage(arrowImage);
  arrow.x = 360;
  arrow.y=bow.y;
  arrow.velocityX = -4;
  arrow.lifetime = 100;
  arrow.scale = 0.3;
  arrowGroup.add(arrow)
}

// Creating  red balloons 
 function redBalloon() {
  red = createSprite(0,Math.round(random(20, 370)), 10, 10);
  red.addImage(red_balloonImage);
  red.velocityX = 10;
  red.lifetime = 150;
  red.scale = 0.1;
  redGroup.add(red)
}

// Creating  blue balloons 
 function blueBalloon() {
  blue = createSprite(0,Math.round(random(20, 370)), 10, 10);
  blue.addImage(blue_balloonImage);
  blue.velocityX = 10;
  blue.lifetime = 150;
  blue.scale = 0.1;
  blueGroup.add(blue)
}

// Creating  green balloons 
 function greenBalloon() {
  green = createSprite(0,Math.round(random(20, 370)), 10, 10);
  green.addImage(green_balloonImage);
  green.velocityX = 10;
  green.lifetime = 150;
  green.scale = 0.1;
  greenGroup.add(green)
}

// Creating  pink balloons 
 function pinkBalloon() {
  pink = createSprite(0,Math.round(random(20, 370)), 10, 10);
  pink.addImage(pink_balloonImage);
  pink.velocityX = 10;
  pink.lifetime = 150;
  pink.scale = 1
  pinkGroup.add(pink)
}
