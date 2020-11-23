var bullet, wall;
var speed, weight, thickness;

function setup() {
  createCanvas(1600,400);
  bullet = createSprite(400, 200, 50,20);
  wall = createSprite(1400,200,60,height/2)
  wall.shapeColor = 80,80,80

  speed = random(55,90)
  weight = random(30,52)
  thickness = random(22,83)

  bullet.velocityX = speed
}

function draw() {
  background(255,255,255); 
  
  if (wall.x - bullet.x < (bullet.width+wall.width)/2) {
    bullet.velocityX = 0
    
  var damage = 0.5 * weight * speed * speed/(thickness * thickness * thickness)
    
  if (damage > 10) {
  wall.shapeColor = 255, 0, 0
  }
  
  if (damage < 10) {
  wall.shapeColor = 0, 255, 0
  }
 }
 

  drawSprites();
}

function hasCollided(Lbullet, Lwall){
bulletRightEdge = Lbullet.x + Lbullet.width
wallLeftEdge = Lwall.x
if(bulletRightEdge>= wallLeftEdge){
return true
}
return false
}
