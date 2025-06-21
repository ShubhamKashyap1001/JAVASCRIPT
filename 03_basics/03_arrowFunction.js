// this :- it is used for current contest(means = current contest)

/*
const user = {
    username: "Shubham kashyap",
    email: "shubham@gmail.com",
    age: 20,
    welcomeMessage : function(){
        console.log(`${this.username} , welcome on  this website and your email Id is ${this.email}`);
        console.log(this);
        
    }

}

user.welcomeMessage()

console.log(user.username);
user.username = "lucky"
user.email = "lucky@gmail.com"
user.welcomeMessage()
console.log(this);

*/
 /*
function chai (){
    let username = "Shubham"
    console.log(this.username);
    
}
chai()

const code = function(){
    let username = "SHubham"
    console.log(this.username);
    
}

code()

*/


// ___________________  Arrow Function ____________________

const code=() => {
    let username = "Shubham"
    console.log(this);
    
}
code()

/*
const addTwoNumber= (num1,num2) => {
    return num1 + num2 ;
}

console.log(addTwoNumber(3,4));

  // Or

const addTwo = (n1,n2) => n1 + n2

console.log(addTwo(3,5));
*/

const addNum = (num1 , num2) => ({username: "Shubham"})          // object in arrow function
console.log(addNum(2,3));
