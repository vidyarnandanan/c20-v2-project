var cat
var backgroundimg
function preload() {
    //load the images here
catimg=loadImage("images/cat1.png")
catmovingimg=loadAnimation("images/cat2.png","images/cat3.png")
mouseimg=loadImage("images/mouse1.png")
mousemovingimg=loadImage("images/mouse2.png","images/mouse3.png")
mouseendimg=loadImage("images/mouse4.png")
catendimg=loadImage("images/cat4.png")
backgroundimg=loadImage("images/garden.png")
}

function setup(){
    createCanvas(800,500);
    //create tom and jerry sprites here
cat=createSprite(700,400,50,50)


cat.addImage(catimg)
cat.setCollider("circle",0,0,40)
cat.scale=0.1
rat=createSprite(200,400,50,50)
rat.addImage(mouseimg)
rat.setCollider("circle",0,0,40)
rat.scale=0.1
}

function draw() {

    background(backgroundimg);
    //cat.debug=true
    //rat.debug=true
    console.log(cat.x-rat.x)
    console.log(cat.width/2-rat.width/2)
    console.log(cat.velocityX)
    //Write condition here to evalute if tom and jerry collide
if(cat.x-rat.x<cat.width/2-rat.width/2){

    cat.addAnimation("cat",catendimg)
    rat.addAnimation("rat",mouseendimg)
cat.changeAnimation("cat")
rat.changeAnimation("rat")

cat.velocityX=0

}
    drawSprites();
}


function keyPressed(){

  //For moving and changing animation write code here
if (keyDown(UP_ARROW)){
cat.velocityX=-5
cat.addAnimation("running1",catmovingimg)
cat.changeAnimation("running1")

rat.addAnimation("running",mousemovingimg)
rat.changeAnimation("running")

}

}
