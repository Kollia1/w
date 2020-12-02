const Engine = Matter.Engine;
const World = Matter.World;
const Events = Matter.Events;
const Bodies = Matter.Bodies;
 

var particles =[]
var particle;
var plinkos=[]
var divisions=[]
var divisionHeight=300;
var score =0;
var turn=0;
function setup() {
  createCanvas(480, 745);
  engine = Engine.create();
  world = engine.world;
  ground = new Ground(width/2,height,width,20);

  score=0
  count=0
  gameState="play"
   for (var k = 0; k <=width; k = k + 80) {
     divisions.push(new Divisions(k, height-divisionHeight/2, 10, divisionHeight));
   }


    for (var j = 75; j <=width; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,75));
    }

    for (var j = 50; j <=width-10; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,175));
    }

     for (var j = 75; j <=width; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,275));
    }

     for (var j = 50; j <=width-10; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,375));
    }

    

    
}
 


function draw() {
  background("black");
  textSize(20)
  textFont("white")
  text("Score : "+score,20,30);
  text("50",15,730)
  text("50",100,730)
  text("50",200,730)
  text("100",275,730)
  text("100",350,730)
  text("100",425,730)
  Engine.update(engine);
 
  
   for (var i = 0; i < plinkos.length; i++) {
     
     plinkos[i].display();
     
   }
 
   console.log(count)
   for (var k = 0; k < divisions.length; k++) {
     
     divisions[k].display();
   }

   if (gameState==="play"){
     if(keyCode===32){
          
    mousePressed()
    console.log("boo")

    
  }
   if(particle!=null){
     particle.display()
      if(particle.body.position.y>600){    
        if(particle.body.position.x<240){
          score=score+50;
          count=count+1
          particle=null;
          if(count>=5){
            gameState="end"
            console.log("hello")
          }
        }
         
            
   }
   
  }
  if(particle!=null){
    particle.display()
     if(particle.body.position.y>600){    
       if(particle.body.position.x>240){
         score=score+100;
         particle=null;
         count=count+1
         
       }
       if(count==5){
        gameState="end"
        console.log("hello")
      }
        
           
    }
  }
 }

 if(gameState==="end"){
    text("You Got "+score,240,20)
 }
}

function mousePressed(){
  if(gameState!=="end"){

    particle=new Particle(mouseX,20,10)

  }
  
}