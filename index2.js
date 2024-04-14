//board
var blockSize = 25;
var rows2 = 20;
var cols2 = 20;
var board2;
var context2; 

//snake head
var snakeX2 = blockSize * 5;
var snakeY2 = blockSize * 5;

var velocityX2 = 0;
var velocityY2 = 0;

var snakeBody2 = [];

//food
var foodX2;
var foodY2;

var played2 = false;
var gameOver2 = false;
var score2 = 0;

var level = 100 ;
var hardness = window.location.search;
var urlParams = new URLSearchParams(hardness);
level = urlParams.get('level');

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
        board2 = document.getElementById("board");
        board2.height = rows2 * blockSize;
        board2.width = cols2 * blockSize;
        context2 = board2.getContext("2d"); //used for drawing on the board
        placeFood2();
        document.addEventListener("keyup", changeDirection2);
        // update2();
        setInterval(update2,level); //100 milliseconds
    }
}

function update2() {
    if (gameOver2) {
        return;
    }

    context2.fillStyle="black";
    context2.fillRect(0, 0, board2.width, board2.height);

    context2.fillStyle="red";
    context2.fillRect(foodX2, foodY2, blockSize, blockSize);

    if (snakeX2 == foodX2 && snakeY2 == foodY2) {
        snakeBody2.push([foodX2, foodY]);
        placeFood2();
        score2 += 73;
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
    if (snakeX2 < 0 || snakeX2 > cols2*blockSize || snakeY2 < 0 || snakeY2 > rows2*blockSize) {
        gameOver2 = true;
        played2 = true;
        alert(" P2 :  Game Over ! ");
        if(played1 == true && played2 == true){
            var url2  = 'index.html#sec?score1=' + score1 + '&score2=' + score2;
            window.location.replace(url2);
        }
    }

    for (let i = 0; i < snakeBody.length; i++) {
        if (snakeX2 == snakeBody2[i][0] && snakeY2 == snakeBody2[i][1]) {
            gameOver2 = true;
            played2 = true;
            alert(" P2 :  Game Over ! ");
            if(played1 == true && played2 == true){
                var url2  = 'index.html#sec?score1=' + score1 + '&score2=' + score2;
                window.location.replace(url2);
            }
        }
    }
}

function changeDirection2(e) {
    if (e.code == "KeyW" && velocityY2 != 1) {
        velocityX2 = 0;
        velocityY2 = -1;
    }
    else if (e.code == "KeyS" && velocityY2 != -1) {
        velocityX2 = 0;
        velocityY2 = 1;
    }
    else if (e.code == "KeyA" && velocityX2 != 1) {
        velocityX2 = -1;
        velocityY2 = 0;
    }
    else if (e.code == "KeyD" && velocityX2 != -1) {
        velocityX2 = 1;
        velocityY2 = 0;
    }
}


function placeFood2() {
    //(0-1) * cols -> (0-19.9999) -> (0-19) * 25
    foodX2 = Math.floor(Math.random() * cols2) * blockSize;
    foodY2 = Math.floor(Math.random() * rows2) * blockSize;
}