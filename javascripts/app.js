// Rover Object Goes Here
// ======================

// ======================

var grid = new Array(10);
function createGrid(grid){
  for (var i = 0; i < 10; i++) {
    grid[i] = new Array(10);
    for(var j = 0 ; j < 10 ; j++){
      if((i === j) && ((i % 2) === 0) && (i != 0)){
        grid[i][j] = "[Obstacle]";
      }
      else{
        grid[i][j] = "[       ]";
      }
    }
  }


/* for(var i = 0 ; i <= 9; i++ ){
   var obst = [];
   for (var j = 0; j <= 9; j++){
     if(i === j){
       obst.push("[obstacle], ");
       console.log(obst[j]);
     } else {
       obst.push("[  ], ");
       console.log(obst[j]);
     }
   }
 }*/
 }

createGrid(grid);


var rover = {
  direction : ["N", "S", "E", "W"],
  currDir : "N",
  x : 0,
  y : 0,
  travelLog : []
};

var moves = "rffrfflfrff’";

function coordinate(x, y){
  this.x = x;
  this.y = y;
}
function commands(moves){
  rover.travelLog.push(new coordinate(rover.x,rover.y));

  for(var i = 0; i < moves.length; i++){
    switch (moves[i]) {
      case "r":
      turnRight(rover);
        break;
      case "f":
      moveForward(rover);
        break;
      case "l":
      turnLeft(rover);
        break;
      case "b":
      moveBackwards(rover);
        break;
      default:
    }
  }
  console.log("Coordinate Log :");
  for (var j = 0; j < rover.travelLog.length; j++) {
    console.log("(" + rover.travelLog[j].x +", " + rover.travelLog[j].y + ")");
 }
}

function turnLeft(rover){
  console.log("turnLeft was called!");

  switch(rover.currDir){
    case "N":
    rover.currDir = rover.direction[3];
      console.log("Rover direction : " + rover.currDir);
      break;
    case "S":
    rover.currDir = rover.direction[2];
      console.log("Rover direction : " + rover.currDir);
      break;
    case "E":
    rover.currDir = rover.direction[0];
      console.log("Rover direction : " + rover.currDir);
      break;
    case "W":
    rover.currDir = rover.direction[1];
      console.log("Rover direction : " + rover.currDir);
      break;
  }
}

function turnRight(rover){
  console.log("turnRight was called!");
  switch(rover.currDir){
    case "N":
    rover.currDir = rover.direction[2];
      console.log("Rover direction : " + rover.currDir);
      break;
    case "S":
    rover.currDir = rover.direction[3];
      console.log("Rover direction : " + rover.currDir);
      break;
    case "E":
    rover.currDir = rover.direction[1];
      console.log("Rover direction : " + rover.currDir);
      break;
    case "W":
    rover.currDir = rover.direction[0];
      console.log("Rover direction : " + rover.currDir);
      break;
  }
}

function moveForward(rover){
  console.log("moveForward was called");
  switch (rover.currDir) {
    case "N":
    //if(rover.y > 0){
    if ((rover.y > 0) && (grid[rover.x][rover.y -1] === "[       ]" )){
    rover.y --;
    console.log("Rover coordinates : (" + rover.x +", " + rover.y + "). ");
    rover.travelLog.push(new coordinate(rover.x,rover.y));
  } else if (grid[rover.x][rover.y -1] === "[Obstacle]") {
    console.log("Invalid move, obstacle ahead!");
  }else{
    console.log("Invalid move, out of bounds!");
  }
      break;
    case "S":
    if ((rover.y < 9) && (grid[rover.x][rover.y + 1] === "[       ]" )){
    rover.y ++;
    console.log("Rover coordinates : (" + rover.x +", " + rover.y + "). ");
    rover.travelLog.push(new coordinate(rover.x,rover.y));
  } else if (grid[rover.x][rover.y +1] === "[Obstacle]") {
    console.log("Invalid move, obstacle ahead!");
  }else {
    console.log("Invalid move, out of bounds!");
  }
      break;
    case "E":
    if ((rover.x < 9) && (grid[rover.x +1 ][rover.y] === "[       ]" )){
    rover.x ++;
    console.log("Rover coordinates : (" + rover.x +", " + rover.y + "). ");
    rover.travelLog.push(new coordinate(rover.x,rover.y));
  } else if (grid[rover.x + 1][rover.y] === "[Obstacle]") {
    console.log("Invalid move, obstacle ahead!");
  }else {
    console.log("Invalid move, out of bounds!");
  }
      break;
    case "W":
    if ((rover.x > 0) && (grid[rover.x - 1][rover.y] === "[       ]" )){
    rover.x --;
    console.log("Rover coordinates : (" + rover.x +", " + rover.y + "). ");
    rover.travelLog.push(new coordinate(rover.x,rover.y));
  }else if (grid[rover.x -1][rover.y] === "[Obstacle]") {
    console.log("Invalid move, obstacle ahead!");
  }else {
    console.log("Invalid move, out of bounds!");
  }
      break;

  }

}

function moveBackwards(rover){
  console.log("moveBackwards was called");
  switch (rover.currDir) {
    case "N":
    if((rover.y > 0) && (grid[rover.x ][rover.y + 1] === "[       ]" )){
    rover.y ++;
    console.log("Rover coordinates : (" + rover.x +", " + rover.y + "). ");
    rover.travelLog.push(new coordinate(rover.x,rover.y));
  } else if (grid[rover.x][rover.y +1] === "[Obstacle]") {
    console.log("Invalid move, obstacle ahead!");
  }else{
    console.log("Invalid move, out of bounds!");
  }
      break;
    case "S":
    if ((rover.y < 9) && (grid[rover.x ][rover.y - 1] === "[       ]" )){
    rover.y --;
    console.log("Rover coordinates : (" + rover.x +", " + rover.y + "). ");
    rover.travelLog.push(new coordinate(rover.x,rover.y));
  }else if (grid[rover.x][rover.y -1] === "[Obstacle]") {
    console.log("Invalid move, obstacle ahead!");
  } else {
    console.log("Invalid move, out of bounds!");
  }
      break;
    case "E":
    if ((rover.x > 0) && (grid[rover.x -1][rover.y] === "[       ]" )){
    rover.x --;
    console.log("Rover coordinates : (" + rover.x +", " + rover.y + "). ");
    rover.travelLog.push(new coordinate(rover.x,rover.y));
  }else if (grid[rover.x -1][rover.y] === "[Obstacle]") {
    console.log("Invalid move, obstacle ahead!");
  } else {
    console.log("Invalid move, out of bounds!");
  }
      break;
    case "W":
    if ((rover.x < 9)  && (grid[rover.x +1][rover.y] === "[       ]" )){
    rover.x ++;
    console.log("Rover coordinates : (" + rover.x +", " + rover.y + "). ");
    rover.travelLog.push(new coordinate(rover.x,rover.y));
  }else if (grid[rover.x + 1][rover.y] === "[Obstacle]") {
    console.log("Invalid move, obstacle ahead!");
  } else {
    console.log("Invalid move, out of bounds!");
  }
      break;

  }

}

commands(moves);
