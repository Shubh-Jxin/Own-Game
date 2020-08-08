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
var pawns=[];
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
         //game.play();

        
        pawn1= new Pawn(100,140,"pic/green.png");
        pawn2= new Pawn(130,140,"pic/red.png");
        pawn3= new Pawn(160,140,"pic/yellow.png");
        pawn4= new Pawn(140,120,"pic/blue.png");
        
    }
    
    function draw(){  
        if(gameState===2){
            if(playerCount <= 4){
                background(0);
                board.display();
                
            } 
    }
    
    Engine.update(engine);

    //game.play();
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

    if(playerCount===1 && gameState===2){
        pawn1.display();
    }
    if(playerCount===2 && gameState===2){
        pawn1.display();
        pawn2.display();
    }
    if(playerCount===3 && gameState===2){
        pawn1.display();
        pawn2.display();
        pawn3.display();
    }
    if(playerCount===4 && gameState===2){
        pawn1.display();
        pawn2.display();
        pawn3.display();
        pawn4.display();
    }   

   // drawSprites();
    
}