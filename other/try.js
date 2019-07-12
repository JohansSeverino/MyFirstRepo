function getHome(){

    const choice = process.argv[2];

    const options =['Mansion', 'Apartment', 'Shack', 'House', 'Under the Six Train Station at Parkchester'];
    
    if(choice != ' '){
        options.push(choice);
    }

    let random = Math.random() * 5
    random = Math.floor(random);
    
    return options[random];
}

function getChildrenCount(){
let childCount = Math.random();
childCount *=100;
childCount= Math.floor(childCount);

let Userwant = process.argv[3];

let childchoice = Math.random() * (1 -.01) + .01;


if(childchoice>.5){
    if(Userwant == null){
        Userwant = 0;
    }
    return Userwant 
}

else{
    return childCount;
}

}
function getcar(){
    const options =['Ferrari', 'BMW', 'bike', 'tricycle', 'box with Wheels'];
    let userCar = process.argv[4];

    if(userCar != ' '){
        options.push(userCar);
    }

    let random = Math.random() * 5
    random = Math.floor(random);

    return options[random];
}

function getDeathAge(){
    let random = Math.random() * 120
    random = Math.floor(random);
    return random;
}

function mash(){
   const result =  "You will live in a "+ getHome() +  " with " + getChildrenCount() + " kids! You'll drive a " + getcar()+ " but you will die at the age of " + getDeathAge() + ".";
    return result;
}

console.log(mash());

Collapse



