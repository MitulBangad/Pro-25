class Bin{
  constructor(x,y,width,height) {
    var options = {
        isStatic: true
       
    }
    this.body = Bodies.rectangle(x,y,width,height,options);
    this.width = width;
    this.height = height;
    World.add(world, this.body);
    this.image=loadImage("Sprites/dustbingreen.png")
  }
  display(){
    var pos =this.body.position;
    rectMode(CENTER);
    fill("255");
   
    image(this.image,535,470,200,210)
  }
}