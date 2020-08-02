class Baseclass{
    constructor(x,y,r,angle){
        var options={
            isStatic:true
        }
        this.body= Bodies.circle(x,y,r,options);
        this.r=r;
        Matter.Body.setAngle(this.body,angle)
        World.add(world, this.body);
        
    }

    display(){
        var pos= this.body.position;
        var angle= this.body.angle;
        ellipseMode(RADIUS);
        ellipse(pos.x,pos.y,this.r);
    }

}

