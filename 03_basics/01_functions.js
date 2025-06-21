// functions

function sayNyName(){
    console.log('s');
    console.log('h');
    console.log('u');
    console.log('b');
    console.log('h');
    console.log('a');
    console.log('m');
}

//sayNyName()


/*
function addTwoNumber(number1, number2){  //parameter

    console.log(number1 + number2);
    
}

addTwoNumber(3,4)  // argument

*/

function addTwoNumber(number1, number2){
    //let result = number1 + number2
    //return result

    return number1+number2
}

const result = addTwoNumber(3,4)
// console.log("Results:", result);



function loginUserMessage(userName){
    if(userName === undefined){
        console.log("Please Enter a userName");
        return
        
    }

    else{
        return `${userName} just logged In`
    }
}

//console.log(loginUserMessage("shubham"));


// Array in functions
function calculateCartPrice(val1,val2,...num1){
    return num1
}

//console.log(calculateCartPrice(100,200,500,800,1000))


// objects in FUnction:-

const user = {
    userName: "Shubham",
    price: 199,
}
function handleObject(anyObject){
    console.log(`UserName is ${anyObject.userName} and the Price is ${anyObject.price}`);
    
}
handleObject(user)


handleObject({
    userName: "Lucky",
    price: 199,
    
})

const myNewArray = [200,400,500,600]

function returnSecondValue(getArray){
    return getArray[1]
}
//console.log(returnSecondValue(myNewArray));
console.log(returnSecondValue([200,400,500,600]));
