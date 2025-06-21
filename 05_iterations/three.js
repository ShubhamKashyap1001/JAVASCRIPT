//for of loops

let Array = [1,2,3,4,5,6]
for (const num of Array) {
    //console.log(num);
    
}

/*
let myObject = {
    username:"shubham",
    age: 20,
    
} 
for (const key of myObject) {
    console.log(key);
    
}
    
*/

/*
let greeting = "Hello World"
for (const greet of greeting) {
    if(greet === " "){
        continue
    }
    console.log(`Each char is ${greet}`);
    
}

*/

// map
// map is object that hold key-value pair and remember the original iteration order of the keys or value

const map = new Map()
map.set('In', "India")
map.set('US', "United State Of America")
map.set('Fr', "france")
map.set('In', "India")

//console.log(map);

//for (const key of map) {
//  console.log(key);
    
//}

for (const [key , value] of map) {
    console.log(key, '->' ,value);
    
}

// map in object
/*
const myObject = {
    'Game1': "freeFire",
    'Game2': "PUBG",
}
for (const [key , value] of myObject) {
    console.log(key, '->' , value);
    
}

*/