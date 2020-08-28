var fixedRect,movingRect,obj1,obj2,obj3,obj4
function setup() {
  createCanvas(800,400);

  fixedRect = createSprite(400, 200, 50, 50);
  movingRect = createSprite(200,200,50,50);
  
  obj1= createSprite(0, 100, 50, 50);
  obj2= createSprite(800, 100, 50, 50);
  obj3= createSprite(600, 0, 50, 50);
  obj4= createSprite(600, 400, 50, 50);
  
  obj1.debug=true;
  obj2.debug=true;
  obj3.debug=true;
  obj4.debug=true;
  
  fixedRect.debug=true;
  movingRect.debug=true;
  
  obj1.shapeColor  ="green";
  obj2.shapeColor  ="green";
  obj3.shapeColor  ="red";
  obj4.shapeColor  ="red";
  
  fixedRect.shapeColor  ="green";
  movingRect.shapeColor  ="green";
  
  obj1.velocityX = 4;
  obj2.velocityX = -4;
  obj3.velocityY = 4;
  obj4.velocityY = -4;
}

function draw() {
  background(0); 
  movingRect.x=mouseX;
  movingRect.y=mouseY;
  
  isTouching(movingRect,fixedRect);
  bounce(obj1,obj2);
  bounce(obj3,obj4);
  
  drawSprites();
}















