const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
var engine,world;
var drops =[];
var maxDrops = 100;
var man;


function setup(){
   engine = Engine.create();
   world = engine.world;

   

   createCanvas(300,650);
   man = new Man(150,450);
   for(var i=0; i< maxDrops;i++){
       drops.push(new Drops(random(0,300),random(0,400)))
   }

  
    
}

function draw(){
    Engine.update(engine)
    background("black")
    man.display();
    
    //displaying drops
   for(var i=0; i< maxDrops;i++){
  drops[i].display();
    drops[i].update();
    
}  

}

