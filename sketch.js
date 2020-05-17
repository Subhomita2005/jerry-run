var bg , bgImg;
var jerry, jerryImg;
var gameState = "PLAY";
var invisibleGround;
var edges;

function preload(){
  bgImg = loadImage("background.jpg");
  jerryImg = loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png");

}


function setup() {
  createCanvas(1000,600);
  bg = createSprite(400,300);
  bg.addImage("level1",bgImg);
  bg.scale = 1.5;
  invisibleGround = createSprite(180,580,1800,10);
  invisibleGround.visible = false ;
 // bg.velocityX = -4 ;
  jerry = createSprite(100,550, 10 ,50);
  jerry.addAnimation("jerry",jerryImg);
  jerry.setCollider("circle",0,0,20);
  jerry.scale = 2;
  jerry.debug = true;
  edges = createEdgeSprites();
}

function draw() {
  background(0);  
  if (gameState === "PLAY"){
   // if (bg.x<0){
   //   bg.x = 900;
    //  }
      if(keyDown("space")){
        jerry.velocityY = -20;
      }
      jerry.velocityY = jerry.velocityY + 0.8;
      Tom();
      cheese();
  }
  jerry.collide(invisibleGround);
  
  drawSprites();
}
function Tom(){
  if(frameCount % random(70,200) === 0){
    var tom = createSprite(1000,550,10,50);
    tom.velocityX = -5;
    tom.shapeColor = "red"
  }
}
function cheese(){
  if(frameCount % random(20,100)===0){
    var cheese = createSprite(1000,550,10,50);
    cheese .velocityX = -3;
    cheese.shapeColor = "pink";

  }
}