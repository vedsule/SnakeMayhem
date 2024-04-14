//board
var blockSize = 25;
var rows = 20;
var cols = 20;
var board;
var context; 

//snake head
var snakeX = blockSize * 5;
var snakeY = blockSize * 5;

var velocityX = 0;
var velocityY = 0;

var snakeBody = [];

//food
var foodX;
var foodY;

var gameOver = false;


window.onload = function() {
    let p1but = document.getElementById("p1butt");
    let p2but = document.getElementById("p2butt");
    p1butname = p1but.getAttribute("name");
    p2butname = p2but.getAttribute("name");

    if(p1butname != "p1selected" && p2butname != "p2selected"){

        board = document.getElementById("board");
        board.height = rows * blockSize;
        board.width = cols * blockSize;
        context = board.getContext("2d"); //used for drawing on the board
        placeFood();
        document.addEventListener("keyup", changeDirection);
        // update();
        setInterval(update, 1000/10); //100 milliseconds
 
    }
}

function update() {
    if (gameOver) {
        return;
    }

    context.fillStyle="black";
    context.fillRect(0, 0, board.width, board.height);

    context.fillStyle="red";
    context.fillRect(foodX, foodY, blockSize, blockSize);

    if (snakeX == foodX && snakeY == foodY) {
        snakeBody.push([foodX, foodY]);
        placeFood();
    }

    for (let i = snakeBody.length-1; i > 0; i--) {
        snakeBody[i] = snakeBody[i-1];
    }
    if (snakeBody.length) {
        snakeBody[0] = [snakeX, snakeY];
    }

    context.fillStyle="lime";
    snakeX += velocityX * blockSize;
    snakeY += velocityY * blockSize;
    context.fillRect(snakeX, snakeY, blockSize, blockSize);
    for (let i = 0; i < snakeBody.length; i++) {
        context.fillRect(snakeBody[i][0], snakeBody[i][1], blockSize, blockSize);
    }

    //game over conditions
    if (snakeX < 0 || snakeX > cols*blockSize || snakeY < 0 || snakeY > rows*blockSize) {
        gameOver = true;
        alert("Game Over");
    }

    for (let i = 0; i < snakeBody.length; i++) {
        if (snakeX == snakeBody[i][0] && snakeY == snakeBody[i][1]) {
            gameOver = true;
            alert("Game Over");
        }
    }
}

function changeDirection(e) {
    if (e.code == "ArrowUp" && velocityY != 1) {
        velocityX = 0;
        velocityY = -1;
    }
    else if (e.code == "ArrowDown" && velocityY != -1) {
        velocityX = 0;
        velocityY = 1;
    }
    else if (e.code == "ArrowLeft" && velocityX != 1) {
        velocityX = -1;
        velocityY = 0;
    }
    else if (e.code == "ArrowRight" && velocityX != -1) {
        velocityX = 1;
        velocityY = 0;
    }
}


function placeFood() {
    //(0-1) * cols -> (0-19.9999) -> (0-19) * 25
    foodX = Math.floor(Math.random() * cols) * blockSize;
    foodY = Math.floor(Math.random() * rows) * blockSize;
}

//board
var blockSize = 25;
var rows = 20;
var cols = 20;


//snake head
var snakeX1 = blockSize * 5;
var snakeY1 = blockSize * 5;

var velocityX1 = 0;
var velocityY1 = 0;

var snakeBody1 = [];

//food
var foodX1;
var foodY1;

var gameOver1 = false;

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
    p2but.setAttribute("name", "player2");

    if(p1butname == "p1selected" || p2butname != "p2selected"){
        gameOver = true;
        gameOver1 = false;
        gameOver2 = true;
        board = document.getElementById("board");
        board.height = rows * blockSize;
        board.width = cols * blockSize;
        context1 = board.getContext("2d"); //used for drawing on the board
        placeFood1();
        document.addEventListener("keyup", changeDirection1);
        // update1();
        setInterval(update1, 1000/10); //100 milliseconds
    }
    
}

function update1() {
    if (gameOver1) {
        return;
    }

    context1.fillStyle="black";
    context1.fillRect(0, 0, board.width, board.height);

    context1.fillStyle="red";
    context1.fillRect(foodX1, foodY1, blockSize, blockSize);

    if (snakeX1 == foodX1 && snakeY1 == foodY1) {
        snakeBody1.push([foodX1, foodY]);
        placeFood1();
    }

    for (let i = snakeBody1.length-1; i > 0; i--) {
        snakeBody1[i] = snakeBody1[i-1];
    }
    if (snakeBody1.length) {
        snakeBody1[0] = [snakeX1, snakeY1];
    }

    context1.fillStyle="lime";
    snakeX1 += velocityX1 * blockSize;
    snakeY1 += velocityY1 * blockSize;
    context1.fillRect(snakeX1, snakeY1, blockSize, blockSize);
    for (let i = 0; i < snakeBody1.length; i++) {
        context1.fillRect(snakeBody1[i][0], snakeBody1[i][1], blockSize, blockSize);
    }

    //game over conditions
    if (snakeX1 < 0 || snakeX1 > cols*blockSize || snakeY1 < 0 || snakeY1 > rows*blockSize) {
        gameOver1 = true;
        alert("Game Over");
    }

    for (let i = 0; i < snakeBody.length; i++) {
        if (snakeX1 == snakeBody1[i][0] && snakeY1 == snakeBody1[i][1]) {
            gameOver1 = true;
            alert("Game Over");
        }
    }
}

function changeDirection1(e) {
    if (e.code == "ArrowUp" && velocityY1 != 1) {
        velocityX1 = 0;
        velocityY1 = -1;
    }
    else if (e.code == "ArrowDown" && velocityY1 != -1) {
        velocityX1 = 0;
        velocityY1 = 1;
    }
    else if (e.code == "ArrowLeft" && velocityX1 != 1) {
        velocityX1 = -1;
        velocityY1 = 0;
    }
    else if (e.code == "ArrowRight" && velocityX1 != -1) {
        velocityX1 = 1;
        velocityY1 = 0;
    }
}


function placeFood1() {
    //(0-1) * cols -> (0-19.9999) -> (0-19) * 25
    foodX1 = Math.floor(Math.random() * cols) * blockSize;
    foodY1 = Math.floor(Math.random() * rows) * blockSize;
}

//board
var blockSize = 25;
var rows = 20;
var cols = 20;
var content2;

//snake head
var snakeX2 = blockSize * 5;
var snakeY2 = blockSize * 5;

var velocityX2 = 0;
var velocityY2 = 0;

var snakeBody2 = [];

//food
var foodX2;
var foodY2;

var gameOver2 = false;

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
    p1but.setAttribute("name", "player1");

    if(p2butname == "p2selected" || p1butname != "p1selected"){
        gameOver = true;
        gameOver1 = true;
        gameOver2 = false;
        board = document.getElementById("board");
        board.height = rows * blockSize;
        board.width = cols * blockSize;
        context2 = board.getContext("2d"); //used for drawing on the board
        
        placeFood2();
        document.addEventListener("keyup", changeDirection2);
        // update2();
        setInterval(update2, 1000/10); //100 milliseconds
    }
}


function update2() {
    if (gameOver2) {
        return;
    }

    context2.fillStyle="black";
    context2.fillRect(0, 0, board.width, board.height);

    context2.fillStyle="red";
    context2.fillRect(foodX2, foodY2, blockSize, blockSize);

    if (snakeX2 == foodX2 && snakeY2 == foodY2) {
        snakeBody2.push([foodX2, foodY]);
        placeFood2();
    }

    for (let i = snakeBody2.length-1; i > 0; i--) {
        snakeBody2[i] = snakeBody2[i-1];
    }
    if (snakeBody2.length) {
        snakeBody2[0] = [snakeX2, snakeY2];
    }

    context2.fillStyle="lime";
    snakeX2 += velocityX2 * blockSize;
    snakeY2 += velocityY2 * blockSize;
    context2.fillRect(snakeX2, snakeY2, blockSize, blockSize);
    for (let i = 0; i < snakeBody2.length; i++) {
        context2.fillRect(snakeBody2[i][0], snakeBody2[i][1], blockSize, blockSize);
    }

    //game over conditions
    if (snakeX2 < 0 || snakeX2 > cols*blockSize || snakeY2 < 0 || snakeY2 > rows*blockSize) {
        gameOver2 = true;
        alert("Game Over");
    }

    for (let i = 0; i < snakeBody.length; i++) {
        if (snakeX2 == snakeBody2[i][0] && snakeY2 == snakeBody2[i][1]) {
            gameOver2 = true;
            alert("Game Over");
        }
    }
}

function changeDirection2(e) {
    if (e.code == "ArrowUp" && velocityY2 != 1) {
        velocityX2 = 0;
        velocityY2 = -1;
    }
    else if (e.code == "ArrowDown" && velocityY2 != -1) {
        velocityX2 = 0;
        velocityY2 = 1;
    }
    else if (e.code == "ArrowLeft" && velocityX2 != 1) {
        velocityX2 = -1;
        velocityY2 = 0;
    }
    else if (e.code == "ArrowRight" && velocityX2 != -1) {
        velocityX2 = 1;
        velocityY2 = 0;
    }
}


function placeFood2() {
    //(0-1) * cols -> (0-19.9999) -> (0-19) * 25
    foodX2 = Math.floor(Math.random() * cols) * blockSize;
    foodY2 = Math.floor(Math.random() * rows) * blockSize;
}