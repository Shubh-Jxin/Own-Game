class Game{
    constructor(){
    }

    getState(){
        var gameStateRef=database.ref("gameState");
        gameStateRef.on("value",(data)=>{
            gameState= data.val();
        });
    }

    updateState(state){
        database.ref("/").update({
            gameState: state
        })
    }

    instructions(){
        if(gameState===0){
            inst= new Instructions()
            inst.display();
        }
    }
    start(){
        if(gameState===1){
            player= new Player();
            player.getCount();
            form= new Form();
            form.display();   
        }

        
    }

    // play(){
    // //     //if(gameState===2){
    // //         board=new Board();
    // //         board.start();
    // //         board.display();
    // //     //}

    // //if(playerCount===1){
    //     // pawn1= new Pawn(50,50,"pic/green.png");
    // //}

    //     //Player.getPlayerInfo();
    //     //if(allPlayers!==undefined){
    //         // var index=0;

    //         // var x;
    //         // var y=50;

    //         // pawns[index].x=x;
    //         // pawns[index].y=y;


    //         // for(var plr in allPlayers){
    //         //     index+=1;
    //         //     y=y+30;
                
    //         //     if(index===player.index){
    //         //         text(player.name,x,y);
    //         //     }
    //         // }

            
    //     //}
    //     //drawSprite();
    // }


}