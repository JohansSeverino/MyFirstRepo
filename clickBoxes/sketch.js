let color = 'blue';

function setup(){
    createCanvas (600, 600)
    
}   
function draw(){
    background('green')
     rect(0, 0, 100, 100);
    fill(color)
    rect(300, 0, 100, 100);
    fill(color);
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





