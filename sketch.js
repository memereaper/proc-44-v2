

var player1,player2;
var bullet1,bulletGroup1,bullet2,bulletGroup2;
var invisibleLine;
var gameState = 0;
var isInvisible = false;
function preload(){

}

function setup() {
  createCanvas(windowWidth,windowHeight);
  player1 = createSprite(windowWidth*.1, windowHeight/2, 25, 25);
  player1.shapeColor = "white"
  player2 = createSprite(windowWidth*.9,windowHeight/2,25,25)
  player2.shapeColor = "white"
  invisibleLine = createSprite(windowWidth/2,windowHeight/2,windowWidth/10,windowHeight)
  invisibleLine.visible = false;
  
  

  bulletGroup1 = new Group();
  bulletGroup2 = new Group();
  
}

function draw() {
  background("pink");
  
  if(gameState===0){
  if(keyDown("A")){
    player1.x = player1.x-10;
    if(keyDown("Q")){
      player1.x = player1.x - 50;
      
    }
  }

  if(keyDown("D")){
    player1.x = player1.x+10;
    if(keyDown("Q")){
      player1.x = player1.x + 50;
      
    }
  }

  if(keyDown("S")){
    player1.y = player1.y+10;
    if(keyDown("Q")){
      player1.y = player1.y + 50;
      
    }
  }

  if(keyDown("W")){
    player1.y = player1.y-10;
    if(keyDown("Q")){
      player1.y = player1.y - 50;
      
    }
  }

  if(keyDown("Z")){
    createBullets1()
  }

  if(keyDown(LEFT_ARROW)){
    player2.x = player2.x-10;
    if(keyDown(190)){
      player2.x = player2.x - 50;
      
    }
  }

  if(keyDown(RIGHT_ARROW)){
    player2.x = player2.x+10;
    if(keyDown(190)){
      player2.x = player2.x + 50;
      
    }
  }

  if(keyDown(DOWN_ARROW)){
    player2.y = player2.y+10;
    if(keyDown(190)){
      player2.y = player2.y + 50;
      
    }
  }

  if(keyDown(UP_ARROW)){
    player2.y = player2.y-10;
    if(keyDown(190)){
      player2.y = player2.y - 50;
      
    }
  }

  if(keyDown(191)){
    createBullets2()
    
    
  }

  if(bulletGroup2.isTouching(player1)){
    text("Player 2 has won",windowWidth/2-60,windowHeight/2)
    gameState = 2
    
  }

  if(bulletGroup1.isTouching(player2)){
    text("Player 1 has won",windowWidth/2-60,windowHeight/2)
    gameState = 2
    
  }

  if(player2.x>windowWidth){
    player2.x = player2.x-30;
  }

  if(player1.x<0){
    player1.x = player1.x+30;
  }

  if(player1.y<0){
    player1.y = player1.y+30;
  }

  if(player2.y<0){
    player2.y = player2.y+30;
  }

  if(player2.y>windowHeight){
    player2.y = player2.y-30;
  }

  if(player1.y>windowHeight){
    player1.y = player1.y-30;
  }

  if(keyDown(188) && isInvisible === false){
    player2.visible = false;
    isInvisible = true;
    
  }

  if(keyDown(222) && isInvisible === true){
    player2.visible = true;
  }

  


}

if(gameState === 2){
  strokeWeight(5)
  fill("White")
  textSize(20)
  text("Press Enter To Restart",windowWidth/2-60,windowHeight/2)
  
  if(keyDown("ENTER")){
  window.location.reload()
  }
}

  player1.bounceOff(invisibleLine)
  player2.bounceOff(invisibleLine)
  

  drawSprites()

}


function createBullets1(){
  if (frameCount%10 == 0){
  bullet1 = createSprite(player1.x+20,player1.y,10,5)
  bullet1.velocityX = 10;
  bullet1.shapeColor = "red"
  bulletGroup1.add(bullet1);
  }
  
}

function createBullets2(){
  if (frameCount%10 == 0){
  bullet2 = createSprite(player2.x-20,player2.y,10,5)
  bullet2.velocityX = -10;
  bullet2.shapeColor = "red"
  bulletGroup2.add(bullet2);
  }
  
}

