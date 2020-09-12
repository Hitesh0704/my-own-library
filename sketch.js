var fixedRect,movingRect;

function setup() {
  createCanvas(1600,800);
  fixedRect=createSprite(1400, 200, 50, 50);
  fixedRect.shapeColor="yellow";
  
  movingRect=createSprite(200, 200, 50, 50);
  movingRect.shapeColor="red";

  gameObject1= createSprite(300,200,50,50);
  gameObject1.shapeColor="green";
  
  gameObject2= createSprite(500,200,50,50);
  gameObject2.shapeColor="green";
  
  gameObject3= createSprite(700,200,50,50);
  gameObject3.shapeColor="green";

  gameObject4= createSprite(900,200,50,50);
  gameObject4.shapeColor="green";

  movingRect.velocityX= 2;
  fixedRect.velocityX=-2;
}

function draw() {
  background("black");
  movingRect.x=mouseX;
  movingRect.y=mouseY;
  
  if(isTouching(movingRect, gameObject3)){
     movingRect.shapeColor="blue";
     gameObject3.shapeColor="blue";
  }
  else{
    movingRect.shapeColor="yellow";
    gameObject3.shapeColor="yellow";
  }
  
  bounceOff(movingRect,fixedRect);
  drawSprites();
}
