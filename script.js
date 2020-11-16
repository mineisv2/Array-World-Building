var c = document.getElementById("myCanvas");
var ctx = c.getContext("2d");

myCanvas.width = width = 1200;
myCanvas.height = height = 600;

var playerSize = 40;

var rows = height/playerSize;
var columns = width/playerSize;

var world = [];

var playerPos = [1, 1];

var objects = [[5, 5], [4, 4]];

//functions for making the world with all objects

//Function that puts all the objects into the world, based on the coordinates in the objests array
function putObjs(){
	for(var i = 0; i < objects.length; i++){ 
		world[objects[i][1]][objects[i][0]] = 2;
	}
}

//builds and array of all 0's
function buildArray(){
	for(var row = 0; row < rows; row++){
		world[row] = [];
		for(var column = 0; column < columns; column++){
			world[row][column] = 0;
		}
	}
}

//draws the world for 0 values it is an empty cube; for 1 values it draws a red cube for the player; for 2 values it draws a green cube as an obstice
function drawWorld(){
	ctx.beginPath();
	for(var row = 0; row < rows; row++){
		for(var column = 0; column < columns; column++){
			if(world[row][column] == 0){
				ctx.rect(column*playerSize, row*playerSize, playerSize, playerSize);
				ctx.stroke();
			}else if(world[row][column] == 1){
				ctx.fillStyle = "#FF0000";
				ctx.fillRect(column*playerSize, row*playerSize, playerSize, playerSize);
			}else if(world[row][column] == 2){
				ctx.fillStyle = "#00FF00";
				ctx.fillRect(column*playerSize, row*playerSize, playerSize, playerSize);
			}
		}
	}
}


//code for making a new component
function component(width, height, color, x, y) {
  this.width = width;
  this.height = height;
  this.x = x + worldOffX;
  this.y = y + worldOffY;
  ctx.fillStyle = color;
  ctx.fillRect(this.x, this.y, this.width, this.height);
  this.update = function(){
    ctx.fillStyle = color;
    ctx.fillRect(this.x, this.y, this.width, this.height);
  }
}


//Player movement

//will move the playerPos in the array
//status: not started
function moveArray(e){
	//console.log(e.keyCode);
	buildArray();
	putObjs();
	ctx.clearRect(0, 0, width, height);
	if(e.keyCode == 38 && world[playerPos[1]-1][playerPos[0]] == 0){
		playerPos[1] -= 1;
	}else if(e.keyCode == 40 && world[playerPos[1]+1][playerPos[0]] == 0){
		playerPos[1] += 1;
	}else if(e.keyCode == 37 && world[playerPos[1]][playerPos[0]-1] == 0){
		playerPos[0] -= 1;
	}else if(e.keyCode == 39 && world[playerPos[1]][playerPos[0]+1] == 0){
		playerPos[0] += 1;
	}
	world[playerPos[1]][playerPos[0]] = 1;
	drawWorld();
	e.preventDefault();
}

//will move the player freely in the world
//status: only moves in grids
function move(e){
	//console.log(e.keyCode);
	buildArray();
	putObjs();
	ctx.clearRect(0, 0, width, height);
	if(e.keyCode == 38 && world[playerPos[1]-1][playerPos[0]] == 0){
		playerPos[1] -= 1;
	}else if(e.keyCode == 40 && world[playerPos[1]+1][playerPos[0]] == 0){
		playerPos[1] += 1;
	}else if(e.keyCode == 37 && world[playerPos[1]][playerPos[0]-1] == 0){
		playerPos[0] -= 1;
	}else if(e.keyCode == 39 && world[playerPos[1]][playerPos[0]+1] == 0){
		playerPos[0] += 1;
	}
	world[playerPos[1]][playerPos[0]] = 1;
	drawWorld();
	e.preventDefault();
}

//////Program\\\\\
addEventListener("keydown", move);
buildArray();
world[playerPos[1]][playerPos[0]] = 1;
putObjs();
drawWorld();
