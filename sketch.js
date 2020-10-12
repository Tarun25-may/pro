const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var box1, pig1,pig3;
var backgroundImg,platform;
var bird, slingshot;
var gameState="onSling";
var ball;

function preload() {
 block8=new Block(330,235,30,40)
 block9=new Block(360,235,30,40)
 block10=new Block(390,235,30,40)
 block11=new Block(420,235,30,40)
 block12=new Block(450,235,30,40)

 block13=new Block(360,195,30,40)
 block14=new Block(390,195,30,40)
 block15=new Block(420,195,30,40)

 block16=new Block(390,155,30,40)
}

function setup(){
    var canvas = createCanvas(900,400);
    engine = Engine.create();
    world = engine.world;
Engine.run(engine);


    ground = new Ground(450,390,900,20);
  stand= new Stand(390, 300, 250, 10);
  ball = Bodies.circle(50,200,20);
   World.add(world,ball);
    slingShot = new Slingshot(this.ball,{x:100,y:200});
    
    //log6 = new Log(230,180,80, PI/2);
   
}

function draw(){
    background(backgroundImg);
    ground.display();
    stand.display();
    ellipse(ball.position.x,ball.position.y,40,40)
    //log6.display();
    slingshot.display();    
    block1.display();
    block2.display();
    block3.display();
    block4.display();
    block5.diplay();
    block6.display();
    block7.display();
    block8.display();
    block9.display();

}

function mouseDragged(){
    
   
        Matter.Body.setPosition(this.ball, {x: mouseX , y: mouseY});
    
}



function mouseReleased(){
    slingshot.fly();


}

