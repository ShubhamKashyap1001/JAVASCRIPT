// for in loops


// 'for in loops ' is used in object
let myObject = {
    js: "javascript",
    py: "python",
    rb: "ruby",
}

for (const key in myObject) {
    console.log(key);
    
}
let myobject = {
    js: "javascript",
    py: "python",
    rb: "ruby",
}

for (const key in myobject) {
    console.log(myobject[key]);
    
}
let language = {
    js: "javascript",
    py: "python",
    rb: "ruby",
}

for (const key in language) {
    console.log(`${key} is shortcut for ${language[key]}`);
    
}


//"for in loop"  in array

const programming = ["javascript","java","cpp","python","ruby"]

for(const key in programming){
    console.log(key);
    console.log(programming[key]);
    
}


// map is not iterable so we cannot use for in loops or we cannot iterate map
const map = new Map()
map.set('In', "India")
map.set('US', "United State Of America")
map.set('Fr', "france")
map.set('In', "India")

for(const key in map){
    console.log(key);
    
}