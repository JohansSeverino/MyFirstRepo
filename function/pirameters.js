function cooking (ingredient, state, time){
console.log('the ' + ingredient + ' is ' + state +' it is ' +  time);
}
let ingredient = process.argv[2]
let state = process.argv[3]
let time = process.argv[4]

cooking('rice', 'burning', 330 )


