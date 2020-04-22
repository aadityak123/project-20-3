
var wall1,wall2,wall3,wall4;
var ob1,ob2,ob3,ob4,ob5;
var car1,car2,car3,car4;


function setup() {
  createCanvas(1600,400);
  
  wall1 = createSprite(1500,50,10,50);
  wall1.shapeColor = color(80,80,80);

  wall2 = createSprite(1500,150,10,50);
  wall2.shapeColor = color(80,80,80);

  wall3 = createSprite(1500,250,10,50);
  wall3.shapeColor = color(80,80,80);

  wall4 = createSprite(1500,350,10,50);
  wall4.shapeColor = color(80,80,80);

  ob1 = createSprite(800,100,1600,5);
  ob1.shapeColor = "black";

  ob2 = createSprite(800,200,1600,5);
  ob2.shapeColor = "black";

  ob3 = createSprite(800,300,1600,5);
  ob3.shapeColor = "black";

  ob4 = createSprite(800,1,1600,5);
  ob4.shapeColor = "black";

  ob5 = createSprite(800,399,1600,5);
  ob5.shapeColor = "black";

  car1 = createSprite(50,50,10,10);
  //car1 = new Car;
  car1.weight = 600;
  car1.speed = 40;
  car1.shapeColor = "white";
  
  car2 = createSprite(50,150,10,10);
  //car2 = new Car;
  car2.weight = 800;
  car2.speed = 60;
  car2.shapeColor = "white";

  car3 = createSprite(50,250,10,10);
  //car3 = new Car;
  car3.weight = 800;
  car3.speed = 80;
  car3.shapeColor = "white";

  car4 = createSprite(50,350,10,10);
  //car4 = new Car;
  car4.weight = 1400;
  car4.speed = 95;
  car4.shapeColor = "white";
  
}

function draw() {
  background("grey");  

  if(keyWentDown("1")){
    car1.velocityX = car1.speed;
  }

  if(keyWentDown("2")){
    car2.velocityX = car2.speed;
  }

  if(keyWentDown("3")){
    car3.velocityX = car3.speed;
  }

  if(keyWentDown("4")){
    car4.velocityX = car4.speed;
  }


  //car1
  if(0.5*car1.weight*car1.speed*car1.speed/22500 < 100 && car1.isTouching(wall1)){
  car1.shapeColor = "green";
  }

  if(0.5*car1.weight*car1.speed*car1.speed/22500 > 100 && 0.5*car1.weight*car1.speed*car1.speed/22500 < 180 && car1.isTouching(wall1)){
  car1.shapeColor = "yellow";
  }

  if(0.5*car1.weight*car1.speed*car1.speed/22500 > 180 && car1.isTouching(wall1)){
  car1.shapeColor = "red";
  }

  //car2
  if(0.5*car2.weight*car2.speed*car2.speed/22500 < 100 && car2.isTouching(wall2)){
    car2.shapeColor = "green";
    }
  
  if(0.5*car2.weight*car2.speed*car2.speed/22500 > 100 && 0.5*car2.weight*car2.speed*car2.speed/22500 < 180 && car2.isTouching(wall2)){
    car2.shapeColor = "yellow";
    }
  
  if(0.5*car2.weight*car2.speed*car2.speed/22500 > 180 && car2.isTouching(wall2)){
    car2.shapeColor = "red";
    }

  //car3
  if(0.5*car3.weight*car3.speed*car3.speed/22500 < 100 && car3.isTouching(wall3)){
      car3.shapeColor = "green";
      }
    
  if(0.5*car3.weight*car3.speed*car3.speed/22500 > 100 && 0.5*car3.weight*car3.speed*car3.speed/22500 < 180 && car3.isTouching(wall3)){
      car3.shapeColor = "yellow";
      }
    
  if(0.5*car3.weight*car3.speed*car3.speed/22500 > 180 && car3.isTouching(wall3)){
      car3.shapeColor = "red";
      }

  //car4
  if(0.5*car4.weight*car4.speed*car4.speed/22500 < 100 && car4.isTouching(wall4)){
        car4.shapeColor = "green";
        }
      
  if(0.5*car4.weight*car4.speed*car4.speed/22500 > 100 && 0.5*car4.weight*car4.speed*car4.speed/22500 < 180 && car4.isTouching(wall4)){
        car4.shapeColor = "yellow";
        }
      
  if(0.5*car4.weight*car4.speed*car4.speed/22500 > 180 && car4.isTouching(wall4)){
        car4.shapeColor = "red";
        }
      
  car1.collide(wall1);
  car2.collide(wall2);
  car3.collide(wall3);
  car4.collide(wall4);

  
  textSize(20);
  fill("black");
  stroke("red");

  text("car1",50,25);
  text("press 1 to start",300,25);

  text("car2",50,125);
  text("press 2 to start",300,125);

  text("car3",50,225);
  text("press 3 to start",300,225);

  text("car4",50,325);
  text("press 4 to start",300,325);

  drawSprites();
}