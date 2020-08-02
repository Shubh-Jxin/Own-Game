class Criminal extends Baseclass{
    constructor(x,y,r,angle){
        super(x,y,r);
        this.image=loadImage("criminal.png");
        Matter.Body.setAngle(this.body,angle);
    }
    display(){
        var pos= this.body.position;
        var angle= this.body.angle;
        push();
        rotate(angle);
        translate(pos.x,pos.y);
        imageMode(CENTER);
        image(this.image,0,0,this.r,this.r);
        pop();
    }
}

