class Container{

constructor(x,y){

var option={
 isStatic: true
}

this.bottomBody=Bodies.rectangle(x,y,200,20,option);
this.leftBody= Bodies.rectangle(x-100,y,20,100,option);
this.rightBody= Bodies.rectangle(x+100,y,20,100,option);
World.add(world,this.bottomBody)
World.add(world,this.leftBody)
World.add(world,this.rightBody)
}
display(){


    var pos= this.bottomBody.position;
    var angle= this.bottomBody.angle;
      
      push();
      translate(pos.x,pos.y);
    rotate(angle);
    fill('red')
    rectMode(CENTER)
    rect(0,0,200,20);
      pop();

      var pos1= this.rightBody.position;
    var angle1= this.rightBody.angle;
      
      push();
      translate(pos1.x,pos1.y);
    rotate(angle1);
    fill('red')
    rectMode(CENTER)
    rect(0,0,20,300);
      pop();
  
      var pos2= this.leftBody.position;
      var angle2= this.leftBody.angle;
        
        push();
        translate(pos2.x,pos2.y);
      rotate(angle);
      fill('red')
      rectMode(CENTER)
      rect(0,0,20,300);
        pop();

}


}