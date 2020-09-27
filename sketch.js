var ballGroup;
var gameState="play"
var orcGroup;
var Arkenstone
function preload(){
  boyImg=loadImage("boy.png")
  lavaImg=loadImage("lava.jpg")
gameoverImg=loadImage("download.jpg")
arkImg=loadImage("Arkenstone.jpg")
winImg=loadImage("win.jpg")
}
function setup() {
  createCanvas(windowWidth,windowHeight)
  createSprite(400, 200, 50, 50);
  boy=createSprite(150,330,10,10)
  boy.addImage(boyImg)
  boy.scale=0.01
  line=createSprite(400,330,550,6)
 line1=createSprite(400,270,550,6)
 line2=createSprite(400,210,550,6)
 line3=createSprite(400,150,550,6)
 line4=createSprite(400,90,550,6)
 line5=createSprite(420,78,10,60)
 line6=createSprite(390,78,10,60)
 line7=createSprite(400,300,10,60)
 line8=createSprite(670,240,10,60)
 line9=createSprite(220,120,10,60)
 line10=createSprite(300,180,10,60)
  Arkenstone=createSprite(400,20,20,20)
 Arkenstone.addImage(arkImg)
 Arkenstone.scale=0.06
 ballGroup=new Group()
 orcGroup=new Group()
 Gameover=createSprite(400,200,800,400)
 Gameover.visible=false;
 winn=createSprite(400,200,800,400)
 winn.visible=false;
}

function draw() {
  background(lavaImg);  
  if(boy.isTouching(line)||boy.isTouching(line1)||boy.isTouching(line2)||boy.isTouching(line3) 
  ||boy.isTouching(line4)||boy.isTouching(line5)||boy.isTouching(line6)||boy.isTouching(line7)||boy.isTouching(line8)||boy.isTouching(line9)||boy.isTouching(line10))
  {
    
    if(keyDown(UP_ARROW)){
boy.y=boy.y-5
    
    }
    if(keyDown(DOWN_ARROW)){
      boy.y=boy.y+5
    }
    if(keyDown(LEFT_ARROW)){
      boy.x=boy.x-5
    }
    if(keyDown(RIGHT_ARROW)){
      boy.x=boy.x+5
    }
  }  
  orcs();

        spawnball();
        if(ballGroup.isTouching(boy)){
          Gameover.addImage(gameoverImg) 
          Gameover.visible=true
          gameState="end"
          if(orcGroup.isTouching(boy)){
            Gameover.addImage(gameoverImg) 
            Gameover.visible=true
            gameState="end"
          }
        }
        if(boy.isTouching(Arkenstone)){
          winn.addImage(winImg) 
          Gameover.visible=true
          gameState="win"
        }
        if(gameState==="end"){
          ballGroup.destroyEach();
          orcGroup.destroyEach();
        }
        if(gameState==="win"){
loadImage(winImg)
          ballGroup.destroyEach();
          orcGroup.destroyEach();
        }
  drawSprites();
  function spawnball(){
    if(frameCount%10===0){
      var ball=createSprite(random(20,600),0,20,20)
      ball.velocityY=2
      ballGroup.add(ball)
    }
  }
  function orcs(){
    if(frameCount%10===0){
      var orc=createSprite(0,random(20,600),20,20)
      orc.velocityX=2
      orcGroup.add(orc)
  }
}
}