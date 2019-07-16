let color = 'blue';
let mouseX = 0;
let mouseY = 0;

function setup(){
createCanvas (600, 600)


}

function draw(){

square( 0, 0, 100)
fill(color)

}

function mousePressed(){
if (color == 'blue'){
    color = "red"
}
else if (color =='red'){
    color = "blue"
}
}

function keyPressed(){
    if (keyCode == 32){
        if (color == 'blue'){
            color = "red"
        }
         else if (color =='red'){
            color = "blue"
        }

    }  
}

function mouseClicked() {
    square(0, 0, 100);
}
