//board
var blockSize = 25;
var rows1 = 20;
var cols1 = 20;
var board1;
var context1; 


//snake head
var snakeX1 = blockSize * 5;
var snakeY1 = blockSize * 5;

var velocityX1 = 0;
var velocityY1 = 0;

var snakeBody1 = [];

//food
var foodX1;
var foodY1;

var played1 = false;
var gameOver1 = false;
var score1 = 0 ;

var level = 100 ;
var hardness = window.location.search;
var urlParams = new URLSearchParams(hardness);
level = urlParams.get('level');

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
        board1 = document.getElementById("board");
        board1.height = rows1 * blockSize;
        board1.width = cols1 * blockSize;
        context1 = board1.getContext("2d"); //used for drawing on the board
        placeFood1();
        document.addEventListener("keyup", changeDirection1);
        // update1();
        setInterval(update1, level); //100 milliseconds
    }
    
}

function update1() {
    if (gameOver1) {
        return;
    }

    context1.fillStyle="black";
    context1.fillRect(0, 0, board1.width, board1.height);

    context1.fillStyle="red";
    context1.fillRect(foodX1, foodY1, blockSize, blockSize);

    if (snakeX1 == foodX1 && snakeY1 == foodY1) {
        snakeBody1.push([foodX1, foodY]);
        placeFood1();
        score1 += 73;
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
    if (snakeX1 < 0 || snakeX1 > cols1*blockSize || snakeY1 < 0 || snakeY1 > rows1*blockSize) {
        gameOver1 = true;
        played1 = true;
        alert(" P1 :  Game Over ! ");
        if(played1 == true && played2 == true){
            var url1  = 'index.html#sec?score1=' + score1 + '&score2=' + score2;
            window.location.replace(url1);
        }
    }

    for (let i = 0; i < snakeBody.length; i++) {
        if (snakeX1 == snakeBody1[i][0] && snakeY1 == snakeBody1[i][1]) {
            gameOver1 = true;
            played1 = true;
            alert(" P1 :  Game Over ! ");
            if(played1 == true && played2 == true){
                var url1  = 'index.html#sec?score1=' + score1 + '&score2=' + score2;
                window.location.replace(url1);
            }
            
        }
    }
}

function changeDirection1(e) {
    if (e.code == "KeyW" && velocityY1 != 1) {
        velocityX1 = 0;
        velocityY1 = -1;
    }
    else if (e.code == "KeyS" && velocityY1 != -1) {
        velocityX1 = 0;
        velocityY1 = 1;
    }
    else if (e.code == "KeyA" && velocityX1 != 1) {
        velocityX1 = -1;
        velocityY1 = 0;
    }
    else if (e.code == "KeyD" && velocityX1 != -1) {
        velocityX1 = 1;
        velocityY1 = 0;
    }
}




function placeFood1() {
    //(0-1) * cols -> (0-19.9999) -> (0-19) * 25
    foodX1 = Math.floor(Math.random() * cols1) * blockSize;
    foodY1 = Math.floor(Math.random() * rows1) * blockSize;
}