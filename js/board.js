class Board{
    constructor(){
            
    }
     
    start(){
            sdg1= new Baseclass(150,100,150,150,"pic/sdg1.png");
            sdg2= new Baseclass(300,100,150,150,"pic/sdg2.png");
            sdg3= new Baseclass(450,100,150,150,"pic/sdg3.png");
            sdg4= new Baseclass(600,100,150,150,"pic/sdg4.png");
            sdg5= new Baseclass(900,100,150,150,"pic/sdg5.png");
            sdg6= new Baseclass(1050,100,150,150,"pic/sdg6.png");
            sdg7= new Baseclass(1200,100,150,150,"pic/sdg7.png");
            un= new Baseclass(1370,100,200,200,"pic/un.png");
            sdg8= new Baseclass(1350,275,150,150,"pic/sdg8.png");
            sdg9= new Baseclass(1350,425,150,150,"pic/sdg9.png");
            law= new Baseclass(1370,750,200,200,"pic/law.png");
            sdg10= new Baseclass(1200,750,150,150,"pic/sdg10.png");
            sdg11= new Baseclass(1050,750,150,150,"pic/sdg11.png");
            sdg12= new Baseclass(900,750,150,150,"pic/sdg12.png");
            sdg13= new Baseclass(750,750,150,150,"pic/sdg13.png");
            sdg14= new Baseclass(450,750,150,150,"pic/sdg14.png");
            sdg15= new Baseclass(300,750,150,150,"pic/sdg15.png");
            reward= new Baseclass(125,725,200,200,"pic/reward.png");
            sdg16= new Baseclass(150,550,150,150,"pic/sdg16.png");
            sdg17= new Baseclass(150,400,150,150,"pic/sdg17.png");
            start= new Baseclass(150,250,150,150,"pic/start.png");
            logo= new Baseclass(displayWidth/2-19,displayHeight/2,1000,400,"pic/sdg.png"); 
            
    }

    display(){
        sdg1.display();
        sdg2.display();
        sdg3.display();
        sdg4.display();
        sdg5.display();
        sdg6.display();
        sdg7.display();
        un.display();
        sdg8.display();
        sdg9.display();
        law.display(); 
        sdg10.display();
        sdg11.display();
        sdg12.display();
        sdg13.display();
        sdg14.display();
        sdg15.display();
        reward.display();
        sdg16.display();
        sdg17.display();
        start.display();   
        fill(255)
        rectMode(CENTER);
        rect(750,100,150,150);
        rect(1350,575,150,150);
        rect(600,750,150,150)
        //fill()
        rect(displayWidth/2-19,displayHeight/2,1000,400 )
        noFill();
        stroke(255);
        strokeWeight(3);
        rect(1370,750,190,190);
        logo.display();
       
      
        
    }
        
}