class Player{
    constructor(){
        this.name=null;
        this.points=0;
        this.index=null;
    }

    getCount(){
        var playerCountRef= database.ref("playerCount");
        playerCountRef.on("value",(data)=>{
            playerCount= data.val();
        })
    }

    updateCount(count){
        database.ref("/").update({
            playerCount:count
        });
    }

    update(){
        var playerIndex= "player"+this.index
        database.ref(playerIndex).set({
            name:this.name,
            points:this.point
        });
    }
}