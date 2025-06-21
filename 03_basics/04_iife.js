// Immediately Invoked Function Expression (IIFE)

// global scope ke polution se kai baar problem hoti hai issliye uss global scope ke variable ya declaeration  se bachne ke liye hum iife ka use karte hai 

(function chai(){
    // name IIFE
    console.log(`DB CONNECTED`);
    
})();

// by using arrow function

((name) => {
    console.log(`DB CONNECTED TWO ${name}`);
    
})("shubham")