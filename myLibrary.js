function isTouching(objA,objB){
    if(objA.x+objA.width/2>objB.x-objB.width/2&&objA.y-objA.height/2<objB.y+objB.height/2&&objA.y+objA.height/2>objB.y-objB.height/2&&objA.x-objA.width/2<objB.x+objB.width/2)
      objB.shapeColor = "red"
    else
     objB.shapeColor  ="green";
}

function bounce(objA,objB){
    if(objA.x+objA.width/2>objB.x-objB.width/2&&objA.y-objA.height/2<objB.y+objB.height/2&&objA.y+objA.height/2>objB.y-objB.height/2&&objA.x-objA.width/2<objB.x+objB.width/2){
      objA.velocityX*=-1;
      objA.velocityY*=-1;
      objB.velocityX*=-1;
      objB.velocityY*=-1;
    }
}
