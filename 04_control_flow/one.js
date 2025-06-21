/*
if(2 == "2"){
    console.log("Executed");
    
}
*/

// < , > , <= , >= , == , != , ===(type check also) , !==

/*
if(4 %2 === 0){
    console.log("Even Number");
    
}
else{
    console.log("Odd Number");
    
}
console.log('Executed');

*/

/*
let temp = 50
if(temp === 35 ){
    console.log("Normal Temperature");
    
}
if(temp > 45){
    console.log("High Temperature");
    
}
if(temp<30) {
    console.log("Less Temperature");
    
}
*/
/*
const score = 200
if(score > 100){
    let power = "fly"
    console.log(`User Power: ${power}`);
    
}

//console.log(`User Power: ${power} `);
*/

/*
let balance = 1000
if( balance < 250){
    console.log("Less than 250");
    
}else if( balance < 500){
    console.log("Less than 500");
    
}else if(balance < 750){
    console.log("Less than 750");
    
}else{
    console.log("Equal or greater than 1000");
    
}
*/

const userLoggedIn = true
const debitcard = true
const loggedInFromGoogle = false
const loggedInfromEmail = true

if(userLoggedIn && debitcard){
    console.log("Allow to Buy The Course");
    
}

if(loggedInFromGoogle || loggedInfromEmail){
    console.log("Allow to Login the Website");
    
}