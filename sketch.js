var backgroungImg,back;
var player,playerImg;
var Ground;

function preload(){
  backgroungImg = loadImage("ocea.jpg");
  playerImg = loadImage("player.png");
}
function setup() {
  createCanvas(1300,800);
  //background
  back = createSprite(50,200);
  back.addImage("ocean",backgroungImg);
  back.scale =2.8;

  // player
  player = createSprite(500,500,10,10);
  player.addImage("player",playerImg);
  player.scale = 0.6;
  console.log(player.y);
  player.debug = true;
  
   //invisible ground;
 Ground = createSprite(500,700,1300,40);
 Ground.visible = true;
 Ground.debug = true;
}


function draw() {
  background(0);
  
  //background velocity
  back.velocityX = -8;
  //making background move
  if(back.x<0){
  back.x = 1000;
  }

  //make player jump
  if (keyDown("space")) {
    player.velocityY  = -13;
  }
// adding gravity
  player.velocityY = player.velocityY+0.8;
 
  // collidng
  player.collide(Ground)
  drawSprites();
}