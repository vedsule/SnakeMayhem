//board
var blockSize = 25;
var rows = 20;
var cols = 20;
var board;
var context; 

//snake head
var snakeX1 = blockSize * 5;
var snakeY1 = blockSize * 5;
var snakeX2 = blockSize * 15;
var snakeY2 = blockSize * 15;

var velocityX = 0;
var velocityY = 0;

var snakeBody1 = [];
var snakeBody2 = [];


//food
var foodX;
var foodY;

var pstatus ;
var gameOver1 = false;
var gameOver2 = false;
var gamenumber = 1 ;
score1 = 0 ;
score2 = 0 ; 


//game hardness mode
const hardness = window.location.search;
const urlParams = new URLSearchParams(hardness);
const level = urlParams.get('level'); 


window.onload = function() {
    board = document.getElementById("board");
    board.height = rows * blockSize;
    board.width = cols * blockSize;
    context = board.getContext("2d"); //used for drawing on the board

    placeFood();
    document.addEventListener("keyup", changeDirection);
    // update();
    setInterval(update, 100); //100 milliseconds
}



function p1(){
    var p = document.getElementById("p1butt");
    pstatus = p1;
    p.setAttribute("name", "p1selected");

    var para = document.getElementById("selectmsg");
    para.style.display = "none";

    let p1but = document.getElementById("p1butt");
    let p2but = document.getElementById("p2butt");
    p1but.style.cssText = " border-bottom: 6px solid; border-color: #ffc801;" ;
    p2but.style.cssText = " border-bottom: 4px solid; border-color: #370495;" ;
}

function p2(){
    var p = document.getElementById("p2butt");
    pstatus = p2;
    p.setAttribute("name", "p2selected");

    var para = document.getElementById("selectmsg");
    para.style.display = "none";

    let p1but = document.getElementById("p1butt");
    let p2but = document.getElementById("p2butt");
    p2but.style.cssText = " border-bottom: 6px solid; border-color: #ffc801;" ;
    p1but.style.cssText = " border-bottom: 4px solid; border-color: #370495;" ;
}

function startGame(){
    if(pstatus == 1 && gameOver1 == false){
        game1();
    }
    if(pstatus == 2 && gameOver2 == false){
        game2();
    }
}

function game1() {
    board = document.getElementById("board");
    board.height = rows * blockSize;
    board.width = cols * blockSize;
    context = board.getContext("2d"); //used for drawing on the board
    placeFood();
    document.addEventListener("keyup", changeDirection);
    //update();
    setInterval(update1, level); //100 milliseconds
}

function game2() {
    board = document.getElementById("board");
    board.height = rows * blockSize;
    board.width = cols * blockSize;
    context = board.getContext("2d"); //used for drawing on the board
    placeFood();
    document.addEventListener("keyup", changeDirection);
    //update();
    setInterval(update2, level); //100 milliseconds
}


function update1() {
    if (gameOver1) {
        return;
    }

    context.fillStyle="black";
    context.fillRect(0, 0, board.width, board.height);

    context.fillStyle="red";
    context.fillRect(foodX, foodY, blockSize, blockSize);

    if (snakeX1 == foodX && snakeY1 == foodY) {
        snakeBody1.push([foodX, foodY]);
        placeFood();
    }

    for (let i = snakeBody1.length-1; i > 0; i--) {
        snakeBody1[i] = snakeBody1[i-1];
    }
    if (snakeBody1.length) {
        snakeBody1[0] = [snakeX1, snakeY1];
    }

    context.fillStyle="lime";
    snakeX1 += velocityX * blockSize;
    snakeY1 += velocityY * blockSize;
    context.fillRect(snakeX1, snakeY1, blockSize, blockSize);
    for (let i = 0; i < snakeBody1.length; i++) {
        context.fillRect(snakeBody1[i][0], snakeBody1[i][1], blockSize, blockSize);
    }

    //game over conditions
    if (snakeX1 < 0 || snakeX1 > cols*blockSize || snakeY1 < 0 || snakeY1> rows*blockSize) {
        gameOver1 = true;
        alert(" Player 1 : Game Over");
    }

    for (let i = 0; i < snakeBody1.length; i++) {
        if (snakeX1 == snakeBody1[i][0] && snakeY1 == snakeBody1[i][1]) {
            gameOver1 = true;
            alert("Player 1 : Game Over");
        }
    }
}

function update2() {
    if (gameOver2) {
        return;
    }

    context.fillStyle="black";
    context.fillRect(0, 0, board.width, board.height);

    context.fillStyle="red";
    context.fillRect(foodX, foodY, blockSize, blockSize);

    if (snakeX2 == foodX && snakeY2 == foodY) {
        snakeBody2.push([foodX, foodY]);
        placeFood();
    }

    for (let i = snakeBody2.length-1; i > 0; i--) {
        snakeBody2[i] = snakeBody2[i-1];
    }
    if (snakeBody2.length) {
        snakeBody2[0] = [snakeX2, snakeY2];
    }

    context.fillStyle="lime";
    snakeX2 += velocityX * blockSize;
    snakeY2 += velocityY * blockSize;
    context.fillRect(snakeX2, snakeY2, blockSize, blockSize);
    for (let i = 0; i < snakeBody2.length; i++) {
        context.fillRect(snakeBody2[i][0], snakeBody2[i][1], blockSize, blockSize);
    }

    //game over conditions
    if (snakeX2 < 0 || snakeX2 > cols*blockSize || snakeY2 < 0 || snakeY2> rows*blockSize) {
        gameOver2 = true;
        alert(" Player 2 : Game Over");
    }

    for (let i = 0; i < snakeBody1.length; i++) {
        if (snakeX2 == snakeBody2[i][0] && snakeY2 == snakeBody2[i][1]) {
            gameOver2 = true;
            alert("Player 2 : Game Over");
        }
    }
}

function changeDirection(e) {
    if (e.code == "KeyW" && velocityY != 1) {
        velocityX = 0;
        velocityY = -1;
    }
    else if (e.code == "KeyS" && velocityY != -1) {
        velocityX = 0;
        velocityY = 1;
    }
    else if (e.code == "KeyA" && velocityX != 1) {
        velocityX = -1;
        velocityY = 0;
    }
    else if (e.code == "KeyD" && velocityX != -1) {
        velocityX = 1;
        velocityY = 0;
    }
}


function placeFood() {
    //(0-1) * cols -> (0-19.9999) -> (0-19) * 25
    foodX = Math.floor(Math.random() * cols) * blockSize;
    foodY = Math.floor(Math.random() * rows) * blockSize;
}




//button press css active 