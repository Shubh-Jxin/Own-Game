const Engine= Matter.Engine;
const World= Matter.World;
const Bodies= Matter.Bodies;

var canvas;
var world,engine;

function setup(){
    canvas= createCanvas(displayWidth-20,displayHeight-30);
    engine= Engine.create();
    world= engine.world;

    criminal1= new Criminal(300,300,150,mouseX);
    shooter= new Shooter(200,700,125);
    hostage= new Hostage(500,500,175);
}

function draw(){    
    background(0)
    Engine.update(engine);

    criminal1.display();
    shooter.display();
    hostage.display();
}