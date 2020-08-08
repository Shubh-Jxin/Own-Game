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

        if(playerCount===1){
            pawn1.addImage("pawn1",pawn1_img);
        }
    }

    play(){
    //     //if(gameState===2){
    //         board=new Board();
    //         board.start();
    //         board.display();
    //     //}

        Player.getPlayerInfo();
        if(allPlayers!==undefined){
            var 
        }
    }


}