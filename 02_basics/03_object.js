//object is declared in two way:- literal and constractor
//singleton
//object.create

//object literals


let mySym=Symbol("key1");


const JsUser={
    name:"shubham",
    "firstName":"shubham",
    "lastName":"kashyap",
    [mySym]: "mykey1", 
    email:"shubham12@gmail.com",
    age:20,
    location:"kolkata",
    isLoggedIn:false,
    lastLoginDays:["monday","tuesday"], //array in object

}

//console.log(JsUser.email);
//console.log(JsUser["firstName"]);
//console.log(JsUser["lastName"]);
//console.log(JsUser[mySym]);
//console.log(typeof JsUser[mySym]);

//freeze concept
/*
JsUser.email = "shubham2004@gmail.com"
Object.freeze(JsUser)
JsUser.email = "shubham@gmail.com"
//console.log(JsUser);



*/
JsUser.greeting = function(){
    console.log("Hello JS User");
    
}
JsUser.greetingTwo = function(){
    console.log(`Hello JS User,${this.name}`);
    
}
console.log(JsUser.greeting());
console.log(JsUser.greetingTwo());



let greeting = function(name){
    console.log(`hello JS user ${name}`);
    
}

greeting(JsUser.name)