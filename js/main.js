let canvas = document.getElementById("snake");
let context = canvas.getContext("2d");
let box = 32;
let snake = [];
snake[0]= {
     x: 8 * box,
     y: 8 * box
}

let direction = "right";

function cria_bg(){
    context.fillStyle = "#74b9ff";
    context.fillRect(0,0,16 * box,16 * box);
}

function cria_cobra(){
    for(i=0;i < snake.length;i++){
        context.fillStyle ="#d63031";
        context.fillRect(snake[i].x,snake[i].y,box,box);
    }
}

function iniciar_jogo(){
    cria_bg();
    cria_cobra();

    let snakeX = snake[0].x;
    let snakeY = snake[0].y;

    if(direction == "right"){
        snakeX +=box;
    }
    if(direction == "left"){
        snakeX -=box;
    }
    if(direction == "up"){
        snakeY -=box;
    }
    if(direction == "down"){
        snakeY +=box;
    }

}

let jogo = setInterval(iniciar_jogo, 100);

