function removelast(array){
    let last = array[ array.length - 1];
array.length = array.length - 1; 
    return last;
};

let arr = [1, 2, 3, 4, 5];
let last = removelast(arr);

console.log(last);
console.log(arr);


