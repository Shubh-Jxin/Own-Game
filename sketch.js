const Engine= Matter.Engine;
const World= Matter.World;
const Bodies= Matter.Bodies;

var canvas;
var world,engine;
var playerCount;
var gameState=0;
var player, game,form, inst;
var sdg1,sdg2,sdg3,sdg4,sdg5,sdg6,sdg7,sdg8,sdg9,sdg10,sdg11,sdg12,sdg13,sdg14,sdg15,sdg16,sdg17;
var un,law,logo,start,reward;
var database;
var reset;
var board;
var allPlayers;
var pawn1, pawn2,pawn3, pawn4;
var pawn1_img, pawn2_img,pawn3_img, pawn4_img;

function preload(){
    pawn1_img= loadImage("pic/green.png");
}
function setup(){
    // if(gameState===2){
        canvas= createCanvas(displayWidth-20,displayHeight-30);
    // }
    engine= Engine.create();   
    world= engine.world;

    database= firebase.database();

    

    game=new Game();
    game.getState();
    game.instructions();

    reset= createButton("reset");
    reset.position(1300,200);

    // if(gameState===2){]
    
    
    //board.display();
    // }
    //if(gameState===2){
        board=new Board();
        board.start();
        
      //  }
        //  /game.play();
        
    }
    
    function draw(){  
        if(gameState===2){
            if(playerCount <= 4){
                background(0);
                board.display();
                game.play();
             //game.play();
            } 
    }

    Engine.update(engine);

    // if(gameState===2){
        
    // }
    // if(gameState===2){
    //     board=new Board();
    //     board.start();
    //     board.display();
    // }
    
     reset.mousePressed(()=>{
        database.ref("/").update({
            playerCount:0,
            gameState:0
        })
    })
    
}