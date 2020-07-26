class Baseclass{
    constructor(x,y,w,h,angle){
        var options={
            isStatic:true
        }
        this.body= Bodies.rectangle(x,y,w,h,options);
        this.w=w;
        this.h=h;
        World.add(world, this.body);
        Matter.Body.setAngle(this.body,angle)
    }

    display(){
        var pos= this.body.position;
        var angle= this.body.angle;
        rectMode(CENTER);
        rect(pos.x,pos.y,this.w,this.h);
    }

}