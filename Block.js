class Block{
  constructor(x, y, width, height) {
      var options = {
          restitution :0.4,
          friction :0.0,
      }
      this.body = Bodies.rectangle(x, y, width, height, options);
      this.image = loadImage("block.png")
      this.width = width;
      this.height = height;
      World.add(world, this.body);
      this.visibility=255;//255 means fully visible 
    }
   display(){
    imageMode(CENTER)
    if(this.body.speed<5){
      image(this.image,this.body.position.x,this.body.position.y,this.width,this.height);
      }
      else{
        World.remove(world,this.body);
        push();
        this.visibility=this.visibility-5;
        tint(255,this.visibility);
        image(this.image,this.body.position.x,this.body.position.y,this.width,this.height);
        pop();
      }
    }
   }

    
