class Hostage extends Baseclass{
    constructor(x,y,r){
        super(x,y,r)
        this.image= loadImage("hostage.png");
    }
    display(){
        var pos= this.body.position;
        imageMode(CENTER);
        image(this.image,pos.x,pos.y,this.r,this.r);
    }
}