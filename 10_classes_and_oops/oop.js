// const user = {
//     username:"shubham",
//     email:"s123@gmail.com",
//     loginCount: 8,
//     signIn: true,

//     getUserDetails:function(){
//         console.log("Got user details from database");
//         console.log(`UserName : ${this.username}`)
//         console.log(this)

//     }
// }

// console.log(user.username);
// console.log(user.getUserDetails());

//constructor function
//new is constructor function that give multiple instances of a single object literals(new copy deta hai haar baar)

function user(username,loginCount,isLoggedIn){
    this.username = username;
    this.loginCount = loginCount;
    this.isLoggedIn = isLoggedIn;

    this.greeting = function(){
        console.log(`Welcome ${this.username}`);
        
    }

    return this;
}

const userOne = new user("shubham",12,true);          //new = constructor function
const userTwo = new user("chaiAurCode",11,false);

console.log(userOne);
console.log(userTwo);




