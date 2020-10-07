class Box{
    constructor(x,y,width,height){
    
    var options =  {
        isStatic : false
        
    }
    this.Visibility = 255;
    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;
    this.body = Bodies.rectangle(this.x,this.y,this.width,this.height,options);
    World.add(world,this.body);
  
  
    }
    display(){
    if(this.body.speed < 3){
        super.display();
    }
    else{
       World.remove(world,this.body);
       push();
       this.Visibilty = this.Visibility - 5;
       tint (255,this.Visibility);
       rectMode(CENTER);
       stroke ("white");
       strokeWeight(20);
       fill("yellow");
       rect(0,0,this.width,this.height);
       pop();
    
    }
    var pos = this.body.position;
    push();
    translate(pos.x,pos.y);
    }
  }