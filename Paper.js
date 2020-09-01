class Paper{
  constructor(x,y,width,height){
    var isStatic;
      var options ={
        isStatic:false,
    restitution:0.10,
       friction:0.5,
       density:1.2
       
      }
      this.body = Bodies.circle(250,width,20,options);
  
      World.add(world,this.body);
       
  }
   
  display(){
    var pos =this.body.position;
    var angle = this.body.angle;
      //push();
      translate(pos.x,pos.y); 
     // rotate(angle);
    ellipseMode(CENTER);
   ellipse(-60, 10, 30, 30);

   fill("red");
    
    pop();
  }
}
