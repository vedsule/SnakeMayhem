//score , game and gamedata
var gameOver1 = false;
var gameOver2 = false;
var gamecount = 0;
var p1score = 0;
var p2score = 0;
var player = 'player1';


        
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
            var toggle = 0 ;

            var snakeBody = [];

            //food
            var foodX;
            var foodY;



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

            function update() {
                if (gameOver1) {
                   
                }
                else{

                context.fillStyle="white";
                context.fillRect(0, 0, board.width, board.height);

                context.fillStyle="#070210";
                context.fillRect(2, 2, board.width-4, board.height-4);

                context.fillStyle="red";
                context.fillRect(foodX, foodY, blockSize, blockSize);

                if (snakeX == foodX && snakeY == foodY) {
                    snakeBody.push([foodX, foodY]);
                    placeFood();
                    p1score += 73;

                    
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
                    gameOver1 = true;
                    game_over();
                }

                for (let i = 0; i < snakeBody.length; i++) {
                    if (snakeX == snakeBody[i][0] && snakeY == snakeBody[i][1]) {
                        gameOver1 = true;
                        game_over();
                    }
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
                
                
                if(e.code == "Space"){
                    if(toggle == 0){
                        velocityX *= 2;
                        velocityY *= 2;
                        toggle =  1;
                    }
                    else{
                        velocityX /= 2;
                        velocityY /= 2;
                        toggle = 0}
                    
                }

            }


            function placeFood() {
                //(0-1) * cols -> (0-19.9999) -> (0-19) * 25
                foodX = Math.floor(Math.random() * cols) * blockSize;
                foodY = Math.floor(Math.random() * rows) * blockSize;
            }

            function game_over(){
                alert("Game Over player 1 ");
                alert("Game Starts player 2 ");
            
                
            }


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
            var toggle = 0 ;

            var snakeBody = [];

            //food
            var foodX;
            var foodY;



            window.onload = function() {
                board = document.getElementById("board");
                board.height = rows * blockSize;
                board.width = cols * blockSize;
                context = board.getContext("2d"); //used for drawing on the board

                placeFood();
                document.addEventListener("keyup", changeDirection);
                // update();
                setInterval(update2, 100); //100 milliseconds
            }

            function update2() {
                if (gameOver2) {
                  return ; 
                }

                context.fillStyle="white";
                context.fillRect(0, 0, board.width, board.height);

                context.fillStyle="#070210";
                context.fillRect(2, 2, board.width-4, board.height-4);

                context.fillStyle="red";
                context.fillRect(foodX, foodY, blockSize, blockSize);

                if (snakeX == foodX && snakeY == foodY) {
                    snakeBody.push([foodX, foodY]);
                    placeFood();
                    p2score += 73;

                    
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
                    gameOver2 = true;
                    game_over();
                }

                for (let i = 0; i < snakeBody.length; i++) {
                    if (snakeX == snakeBody[i][0] && snakeY == snakeBody[i][1]) {
                        gameOver2 = true;
                        game_over();
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
                
                
                if(e.code == "Space"){
                    if(toggle == 0){
                        velocityX *= 2;
                        velocityY *= 2;
                        toggle =  1;
                    }
                    else{
                        velocityX /= 2;
                        velocityY /= 2;
                        toggle = 0}
                    
                }

            }


            function placeFood() {
                //(0-1) * cols -> (0-19.9999) -> (0-19) * 25
                foodX = Math.floor(Math.random() * cols) * blockSize;
                foodY = Math.floor(Math.random() * rows) * blockSize;
            }

        


            







            //  let player1 = document.getElementById("player1");
            //  let player2 = document.getElementById("player2");
            //  if(gameOver1==false && gameOver2 == false){  player1.style.cssText = " border-bottom: 5px solid; border-color: #ffc801;" ;
            //             player2.style.cssText = " border-bottom: 4px solid; border-color: #370495;" ; }
            //  if(gameOver1==true && gameOver2==false){ player2.style.cssText = " border-bottom: 5px solid; border-color: #ffc801;" ;
            //              player1.style.cssText = " border-bottom: 4px solid; border-color: #370495;" ;}
            // if(gameOver1==true && gameOver2==true){var url  = 'index.html#sec?p1score=' + p1score + 'p2score=' + p2score + '&newgame=1' ;
            //          window.location.replace(url);}
            






// function p1(){
//     player = "player1" ;
//     selectp();
//     redirect();
// }

// function p2(){
//     player = "player2" ;
//     selectp();
// }

// function selectp(){
//     let player1 = document.getElementById("player1");
//     let player2 = document.getElementById("player2");

//     if(player == 'player1'){
//         player1.style.cssText = " border-bottom: 5px solid; border-color: #ffc801;" ;
//         player2.style.cssText = " border-bottom: 4px solid; border-color: #370495;" ;
//         var url  = 'index.html#sec?p1score=' + p1score + '&playername=player1' ;
//         window.location.replace(url);
//     }
//     if(player == 'player2'){
//         player2.style.cssText = " border-bottom: 5px solid; border-color: #ffc801;" ;
//         player1.style.cssText = " border-bottom: 4px solid; border-color: #370495;" ;
//         var url  = 'index.html#sec?p2score=' + p2score + '&playername=player2' ;
//         window.location.replace(url);
//     }
    
// }

// function game_over(){
//     alert(" game over " + player);
//     if(player == 'player1'){
//         var url  = 'index.html#sec?p1score=' + p1score + 'p2score=' + p2score + '&playername=player1&newgame=1' ;
//         window.location.replace(url);
//     }
//     if(player == 'player2'){
//         var url  = 'index.html#sec?p1score=' + p1score + 'p2score=' + p2score + '&playername=player2&newgame=1' ;
//         window.location.replace(url);
//     }
    
// }

        
