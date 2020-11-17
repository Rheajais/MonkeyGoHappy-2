
var monkey , monkey_running
var banana ,bananaImage, obstacle, obstacleImage
var FoodGroup, obstacleGroup;
var score=0, ground;

var invisibleGround;

function preload(){ 
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png");
  
  bananaImage=loadImage("banana.png");
  obstacleImage = loadImage("obstacle.png"); 
}

function setup() {
  createCanvas(500,500);
  monkey=createSprite(50,300,0,0);
  monkey.addAnimation("moving", monkey_running);
  monkey.scale=0.10;
  
  ground=createSprite(400,350,997,10);
  ground.velocityX=-4;
  ground.x=ground.width/2;
  console.log(ground.x);
  ground.visible=false;
  
  invisibleGround=createSprite(400,360,900,10);
  invisibleGround.velocityX=-4;
  invisibleGround.x=invisibleGround.width/2;
  invisibleGround.visible=false;
  
  obstaclesGroup=new Group();
  FoodGroup=new Group();
}

function draw() {
  background("green");
  
  
  
  banana();
  
  stroke("black");
  textSize(20);
  fill("black");
  text("Score: "+score,400,50);
   
  obstacles();
  
   
  if(ground.x<0){
    ground.x=ground.width/2;
  }
  
  if (keyDown("space")){
    monkey.velocityY=-12;
  }
  monkey.velocityY=monkey.velocityY+0.8;

  monkey.collide(ground);
  
  if (FoodGroup.isTouching(monkey)){
    score=score+2;
    //monkey.scale=monkey.scale+0.2;
  
    FoodGroup.destroyEach();
    
    
  if (score===6){
    monkey.scale=0.10;
  }
    
    if (score===15){
      monkey.scale=0.12;
    }
    
    if (score===20){
      monkey.scale=0.15;
    }
    
    if (score===28){
      monkey.scale=0.20;
    }
  }
  
  
  console.log(score);
  
  if (obstaclesGroup.isTouching(monkey)){
     monkey.scale=0.12;
  }
  
  
  
  
  
  
drawSprites();
  
    
  
  
  
}

function obstacles(){
  if (World.frameCount%300===0){
    var obstacle=createSprite(500,330,20,20);
    obstacle.addImage(obstacleImage);
    obstacle.scale=0.10;
    obstacle.velocityX=-3;
    
    obstaclesGroup.add(obstacle);
  }
}
  function banana(){
    if (frameCount%80===0){ 
    var banana=createSprite(500,100,20,20);
      banana.addImage(bananaImage);
      banana.scale=0.1;
      banana.velocityX=-3;
      FoodGroup.add(banana);
    }
  
}
