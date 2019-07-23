// let charizardHealth = 150;
// let pikachuHealth = 150;


let slam = 10
let Agility = 50 
let tailwhip = 30


let growl = 10
let ember = 50
let slash = 30 


function setup(){
    createCanvas(500, 500)
    background(0, 255, 255)


}

function mouseClicked({clientX,clientY}){
    fill(0, 255, 255)
    if(mouseX >= 100 && mouseX <= 160 && mouseY >= 100 && mouseY <= 160)
    if(pikachuHealth > 0)
    pikachuHealth = pikachuHealth - 10;
    else if(pikachuHealth <= 1)
    fill('red')
    textSize(15);
    text('*FAINTED*', 370, 400);
};

function mouseClicked({clientX,clientY}){
    fill(0, 255, 255)
    if(mouseX >= 370 && mouseX <= 420 && mouseY >= 70 && mouseY <= 125)
    if(charizardHealth > 0)
    charizardHealth = charizardHealth - 10;
    else if(charizardHealth <= 1)
    fill('red')
    textSize(15);
    text('*FAINTED*', 370, 400);
};

function draw(){
//pikachu
fill("yellow");
ellipse(100, 100, 60, 60);

fill('Black')
textSize(14);
text('Pikachu', 75, 105);
//charizard
fill("orange");
square(370, 70, 55);

fill('black')
textSize(13);
text('Charizard', 370, 100);

//charizard attack
fill('orange')
rect(430, 70 , 50, 15);
rect(430, 90 , 50, 15);
rect(430, 110 , 50, 15);

fill('black')
textSize(12);
text('Ember', 437, 102);
text('Growl', 437, 82);
text('Slash', 437, 120);

//pikachu attack
fill('yellow')
rect(10, 70 , 50, 15);
rect(10, 90 , 50, 15);
rect(10, 110 , 50, 15);

fill('black')
textSize(12);
text('Tail Whip', 9, 102);
text('Agility', 18 , 120);
text('Slam', 18, 80);


//healthbar?

fill(255,255,255)
charizardbh = rect(300, 35, 150, 15);
pikachubh = rect(30, 35, 150, 15);
   fill(124,252,0)
rect(30, 35, pikachuHealth, 15);
rect(300, 35, charizardHealth, 15);

};
