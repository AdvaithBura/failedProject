var rock
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function setup() {
	createCanvas(1600, 700);
	engine = Engine.create();
	world = engine.world;

	rock = createSprite(800,400,30,30);
	//Create the Bodies Here.
	Engine.run(engine);
	box1 = new Box(1275,610,20,100);
	box2 = new Box(1125,610,20,100);
	box3 = new Box(1200,660,150,20); 
	Paper1 = new Paper(200,350);
	ground1 = new Ground(800,680);
}


function draw() {
  rectMode(CENTER);
  background(255);
  box1.display();
  box2.display();
  box3.display();
  Paper1.display();
  ground1.display();
  text("I could not figure out how to use applyForce even though I tried a lot but I instead made a moving square object", 400,400);
  keyPressed();
  drawSprites();
 
}

function keyPressed(){
	if(keyCode === UP_ARROW) {
		//Matter.Body.applyForce(Paper1, Paper1.position, {x: 85, y:-85});
		rock.y = rock.y-10;
	} 

	if(keyCode === DOWN_ARROW) {
		rock.y = rock.y +10;
	} 
	if(keyCode === RIGHT_ARROW) {
		rock.x = rock.x +10;
	} 

	if(keyCode === LEFT_ARROW) {
		rock.x = rock.x-10;
	}
}


