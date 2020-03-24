function setup() {
  createCanvas(800,400);
  createSprite(400, 200, 50, 50);
  fixedRect = createSprite(200,200,50,50);
  movingRect = createSprite(400,200,80,30);
}

function draw() {
  background(0,0,0);
  movingRect.x = World.mouseX;
  movingRect.y = World.mouseY;
  
  drawSprites();
}