// let canvasLength, canvasHeight;
// let player;
// let monster;
// let x = 30;
// let y = 30;
// let directions = [true, false];
// let xDirection = directions[0]




// function setup(){

//     canvasLength = 600;
//     canvasHeight = 600;

//     player = {
//         x: canvasLength/2,
//         y: 550,
//         size: 20,
//         speed: 5
//     }

//     createCanvas(canvasLength, canvasHeight);

// }

// function drawmonstercircle(){
//     if (xDirection == true && x < 570){
//           x += 1;
//     }
//     else if(xDirection == false && x > 10){
//         x -= 1;
//     }
//     if (x == 570 || x == 10){
//         xDirection = !xDirection;
//     }
// circle(x, y, 20)
// }

// function drawDefense(){
//     for (let i = 80; i <=500 ; i += 100 ) {
//         rect(i,450,40,50); 
//      };
// };


// function drawInvader(){
//     for(let i = 80; i<=500; i+= 50){
//         circle(i,100,30);
//         circle(i+=50,200,30)
//     }
// }
// // function monsters(){
// // if(xDirection == true && x > 10)
// // drawcircle() += 1

// // };

// function circlebullet(){

// }


// function drawPlayerCircle(){
//     circle(player.x, player.y, player.size);
//     if (keyIsDown(LEFT_ARROW) && !keyIsDown (RIGHT_ARROW) && player.x >= player.size/2) {
//         player.x -= player.speed;
//     } else if (keyIsDown(RIGHT_ARROW) && !keyIsDown (LEFT_ARROW) && player.x <= canvasLength - player.size/2) {
//         player.x += player.speed;
//     }

// }


// function draw(){
//     background(0, 255, 255);
//     drawPlayerCircle();
//     drawmonstercircle();
//     drawDefense()
//     drawInvader()

//     }



