var c = document.getElementById("myCanvas");
var ctx = c.getContext("2d");

myCanvas.width = width = 1200;
myCanvas.height = height = 600;

var playerSize = 40;

var rows = height/playerSize;
var columns = width/playerSize;

var blWidth = playerSize;

var world = [];

buildArray();

playerPos = [1, 1]
world[playerPos[1]][playerPos[0]] = 1;
enimyPos = [5, 5]
world[enimyPos[1]][enimyPos[0]] = 2;


function buildArray(){
	for(var row = 0; row < rows; row++){
		world[row] = [];
		for(var column = 0; column < columns; column++){
			world[row][column] = 0;
		}
	}
}


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

function moveUp(){
	
}

function move(e){
	//console.log(e.keyCode);
	ctx.beginPath();
	buildArray();
    world[enimyPos[1]][enimyPos[0]] = 2;
	ctx.clearRect(0, 0, width, height);
	if(e.keyCode == 38){
		if(world[playerPos[1]-1][playerPos[0]] == 0){
		    console.log("Here");
		    playerPos[1] -= 1;
		    world[playerPos[1]][playerPos[0]] = 1;
	    }else if(world[playerPos[1]-1][playerPos[0]] == 2){
	    	console.log("blocked");
	    }
	}else if(e.keyCode == 40){
		playerPos[1] += 1;
		world[playerPos[1]][playerPos[0]] = 1;
	}else if(e.keyCode == 37){
		playerPos[0] -= 1;
		world[playerPos[1]][playerPos[0]] = 1;
	}else if(e.keyCode == 39){
		playerPos[0] += 1;
		world[playerPos[1]][playerPos[0]] = 1;
	}
	
	drawWorld();
	//e.preventDefault();
}


//////Program\\\\\
addEventListener("keydown", move);
drawWorld();
