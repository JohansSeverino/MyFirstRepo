function setup(){
    createCanvas(600,1200);
    background(0, 255, 255);
    
};

function mouseClicked({clientX, clientY}){
    //console.log('x:', clientX, 'and Y:', clientY);
    if( clientX <= 100 && clientY<= 100){
        console.log('Are you serious my guy ! ')
    }

}

function draw(){
    circle(50, 50, 100);


}