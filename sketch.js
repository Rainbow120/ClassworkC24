const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var ground, ball;
var pig1;
var box1, box2;

function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;

    ground = new Ground(600,height,1200,20);

    box1 = new Box(700,320,70,70);
    pig1 = new Pig(800,320);
    box2 = new Box(920,320,70,70);

    
    console.log(pig1);
}

function draw(){
    background(255);
    Engine.update(engine);

    ground.display();

    box1.display();
    pig1.display();
    box2.display();

    

   
}
