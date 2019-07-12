function cooking (ingredient, state, time){
console.log('the ' + ingredient + ' is ' + state +' it is ' +  time);
}
let ingredient = process.argv[2]
let state = process.argv[3]
let time = process.argv[4]

cooking('rice', 'burning', 330 )

// function bonelessPizzaOrder(order) {
//     console.log('A boneless pizza with ' + ing1 + ing2 + ing3 + ing4 + ing5)
//     }
    
//       let ing1 = process.argv[0];
//        let ing2 = process.argv[1];
//         let ing3 = process.argv[2];
//          let ing4 = process.argv[3];
//           let ing5 = process.argv[4];
          

