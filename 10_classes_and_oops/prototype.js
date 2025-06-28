let myName = "shubham     ";

console.log(myName.trueLength);

let myHeroes = ["Ironman","spiderman","thor"]

const heroPower = {
    spiderman:"sling",
    thor:"hammer",
    Ironman:"fly",

    getSpiderPower(){
        console.log(`Spider-Man power is ${this.spiderman}`);
        
    }
}

Object.prototype.shubham = function(){
    console.log(`You are inside the Shubham Function`);
}

Object.prototype.heyShubham = function(){
    console.log("Shubham says Hello")
}

myName.shubham();
myHeroes.heyShubham();
myHeroes.shubham();
heroPower.heyShubham();

//Inheritance

const user = {
    username:"chai",
    email:"chai12@gmail.com",
}

const Teacher = {
    makeVideo : true,
}

const TeacherSupporting = {
    isAvailable: false,
}

const TAsupport = {
    makeAssignment: "JS",
    fullTime:true,
    __proto__ : TeacherSupporting,
}


Teacher.__proto__ = user

//Modern Syntax
Object.setPrototypeOf(TeacherSupporting,Teacher)

let anotherUserName = "chaiAurCode      ";

String.prototype.trueLength = function(){
    console.log(`${this}`);
    console.log(`True Length is : ${this.trim().length}`)
}

anotherUserName.trueLength();
myName.trueLength();
"Hitesh".trueLength();
"Shubham     ".trueLength();

