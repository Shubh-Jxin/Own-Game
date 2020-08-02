class Form{
    constructor(){
        this.input= createInput("Name");
        this.button= createButton("Submit");
        this.play= createButton("Start the Game");
        this.greeting= createButton("h3");
    }

    display(){
        var title= createElement("h1");
        title.html("SDG Board Game");
        title.position(100,100);
    }
}