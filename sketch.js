var garden,rabbit,apple,orangeL,redL;
var gardenImg,rabbitImg,carrotImg,orangeImg,redImg;


function preload(){
  gardenImg = loadImage("garden.png");
  rabbitImg = loadImage("rabbit.png");
  appleImg = loadImage("apple.png");
  orangeImg = loadImage("orangeLeaf.png");
  redImg = loadImage("redImage.png");
}


function setup(){
  
  createCanvas(400,400);
// Moving background
garden=createSprite(200,200);
garden.addImage(gardenImg);


//creating boy running
rabbit = createSprite(160,340,20,20);
rabbit.scale =0.09;
rabbit.addImage(rabbitImg);
}

function draw() {
  background(0);
  
  // boy moving on Xaxis with mouse'
  rabbit.x = World.mouseX;
  
  edges= createEdgeSprites();
  rabbit.collide(edges);
  
   drawSprites();
   
  
 var apple  = Math(random(1,3));

 var orangeL  = Math.random(random(1,3));

 var red = Math.round(1,3);

 var apple = Math.round(random(1,3));

  
   if (frameCount % 50 == 0) {
     if (apple == 1) {
       var apple = createSprite(600,300,40,10);
       apple.addImage(appleImage);
       apple.y= Math.round(random(280,320));
       apple.scale=0.4;
       apple.velocityY=3;

     } else if (orangeL == 2) {
      var orangeL = createSprite(600,300,40,10);
      orangeL.addImage(orangeLImage);
      orangeL.y= Math.round(random(280,320));
      orangeL.scale=0.4;
      orangeL.velocityY=3;

     }else {
      var red = createSprite(600,300,40,10);
      red.addImage(redImage);
      red.y= Math.round(random(280,320));
      red.scale=0.4;
      red.velocityY=3;

     }
   }

   if (frameCount % 80 == 0) {
     if (apple == 1) {
      var apple = createSprite(600,300,40,10);
       apple.addImage(appleImage);
       apple.y= Math.round(random(280,320));
       apple.scale=0.4;
       apple.velocityY=3; 
     } else if (orangeL == 2) {
      var orangeL = createSprite(600,300,40,10);
      orangeL.addImage(orangeLImage);
      orangeL.y= Math.round(random(280,320));
      orangeL.scale=0.4;
      orangeL.velocityY=3;
     }
   }

   if (frameCount / 80 == 0) {
     if (apple == 1) {
      var apple = createSprite(600,300,40,10);
      apple.addImage(appleImage);
      apple.y= Math.round(random(280,320));
      apple.scale=0.4;
      apple.velocityY=3; 
     } else if (orangeL == 2) {
      var orangeL = createSprite(600,300,40,10);
      orangeL.addImage(orangeLImage);
      orangeL.y= Math.round(random(280,320));
      orangeL.scale=0.4;
      orangeL.velocityY=3;
     }else {
      var red = createSprite(600,300,40,10);
      red.addImage(redImage);
      red.y= Math.round(random(280,320));
      red.scale=0.4;
      red.velocityY=3;
     }
   }

   if (frameCount % 80 === 0) {
     if (apple == 1) {
      var apple = createSprite(600,300,40,10);
      apple.addImage(appleImage);
      apple.y= Math.round(random(280,320));
      apple.scale=0.4;
      apple.velocityY=3;   
     } else if (orangeL == 2) {
      var orangeL = createSprite(600,300,40,10);
      orangeL.addImage(orangeLImage);
      orangeL.y= Math.round(random(280,320));
      orangeL.scale=0.4;
      orangeL.velocityY=3; 
     }else
     var red = createSprite(600,300,40,10);
     red.addImage(redImage);
     red.y= Math.round(random(280,320));
     red.scale=0.4;
     red.velocityY=3; 
     }
   }





function createApples() {
apple = createSprite(random(50, 350),40, 10, 10);
apple.addImage(appleImg);
apple.scale=0.07;
apple.velocityY = 3;
apple.lifetime = 150;
  
}

function createOrange() {
orangeL = createSprite(random(50, 350),40, 10, 10);
orangeL.addImage(orangeImg);
orangeL.scale=0.08;
orangeL.velocityY = 3;
orangeL.lifetime = 150;
}

function createRed() {
redL = createSprite(random(50, 350),40, 10, 10);
redL.addImage(redImg);
redL.scale=0.06;
  redL.velocityY = 3;
  redL.lifetime = 150;
}
