let canvasLength, canvasHeight;
let player, playerBullet;
let monster;




function setup(){

    canvasLength = 600;
    canvasHeight = 600;

    player = {
        x: canvasLength/2,
        y: 550,
        size: 30,
        speed: 8,
    }

    playerBullet = {
        x: player.x,
        y: player.y,
        size: 10,
        speed: 20,
        check: false 
    }

    monster = {
        
    }

    createCanvas(canvasLength, canvasHeight);

}

function drawInvader(){
    for(let i = 80; i<=500; i+= 50){
        circle(i,100,30);
        circle(i+=50,200,30)
    }
}

function drawDefense(){
    for (let i = 80; i <=500 ; i += 100 ) {
        rect(i,450,40,50); 
     };
};

function drawPlayerCircle() {
    circle(player.x, player.y, player.size);
    if (keyIsDown(LEFT_ARROW) && !keyIsDown(RIGHT_ARROW) && player.x >= player.size/2) {
        player.x -= player.speed;
    } else if (keyIsDown(RIGHT_ARROW) && !keyIsDown(LEFT_ARROW) && player.x <= canvasLength - player.size/2) {
        player.x += player.speed;
    }

}

function drawPlayerBullet() {
    circle(playerBullet.x, playerBullet.y, playerBullet.size);
    

    //bullet movement
    if (keyIsDown(LEFT_ARROW) && !keyIsDown(RIGHT_ARROW) && playerBullet.check == false && player.x >= player.size/2) {
        playerBullet.x -= player.speed;
        playerBullet.x = player.x;
    } else if (keyIsDown(RIGHT_ARROW) && !keyIsDown(LEFT_ARROW) && playerBullet.check == false && player.x <= canvasLength - player.size/2) {
        playerBullet.x += player.speed;
        playerBullet.x = player.x;
    }

    //shooting
    if(playerBullet.check == true) {
        playerBullet.y -= playerBullet.speed;
    }

    if(playerBullet.y <= 0) {
        playerBullet.x = player.x;
        playerBullet.y = player.y;
        playerBullet.check = false;
    }

}

function keyPressed() {
    if (keyCode == 32) {
        playerBullet.check = true;
    }
}


function draw(){
    background(0);
    drawPlayerCircle();
    drawPlayerBullet();
    drawDefense()
    drawInvader()

    }




