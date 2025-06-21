
/*
const userEmail = "shu@gmail.com"
if(userEmail){
    console.log("Got user Email");
    
}else{
    console.log("Don't have user Email");
    
}

*/

//falsy value

// "" , 0, -0, BigInt 0n, null, undefined, NaN, false

//truthy value

//"0", 'false' , " " , [] , {}, function(){}

/*
userEmail = []
if(userEmail.length === 0){
    console.log("Array is Empty");
    
}

const emptyobj = {}

if(Object.keys(emptyobj).length === 0){
    console.log("Object is Empty");
    
}
const emptyObj = {
    userName: "shubham",
    age:20,
}

if(Object.keys(emptyObj).length === 0){
    console.log("Object is Empty");
    
}else{
    console.log("Object is not Empty");
    
}

*/

// Nullish Coalesting Operator (??) : null undefined
/*
let value1;
let value2;
//value1 = 5 ?? 10
//value1 = null ?? 10
//value1 = undefined ?? 15
//value1 = null ?? undefined    // very important
//value2 = undefined ?? null
value1 = null ?? 10 ?? 15


console.log(value1);
console.log(value2);
*/

//Terniary Operator 
//condition ? true : false

const iceTeaPrice = 100
iceTeaPrice <= 80 ? console.log("Price is less than 80") : console.log("Price is more than 80");

