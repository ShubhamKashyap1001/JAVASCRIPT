//const tinderUser = new Object()   singleton object
const tinderUser = {}  //non singleton
tinderUser.id="123abc"
tinderUser.name="alpha"
tinderUser.isLoggedIn=false
//console.log(tinderUser);

const regularUser={
    email:"shubham@gmail.com",
    fullName: {
        userfullName:{
            firstName: "shubham",
            lastName: "kashyap",
            age: 20
        }
    }
}


//console.log(regularUser.fullName.userfullName.age);

const obj1 ={1: "a", 2: "b"};
const obj2 ={3: "c", 4: "d"};
const obj3 ={5: "e", 6: "f"};

//mathod1
//const obj4={...obj1, ...obj2, ...obj3};
//console.log(obj4);

//mathod2
const obj4 = Object.assign({},obj1,obj2,obj3);
//console.log(obj4);

//mathod3
const obj5={obj1,obj2,obj3}
//console.log(obj5);


//objects in Array:

const users = [
    {
        id : 1,
        email : "shu@hmail.com",
        
    },
    {
        id : 2,
        email : "a@gmail.com",

    },
    {
        id : 3,
        email : "b@gmail.com",
    }
]

users[1].email
//console.log(tinderUser);
//console.log(Object.keys(tinderUser)); 
//console.log(Object.values(tinderUser));
//console.log(Object.entries(tinderUser));

//console.log(tinderUser.hasOwnProperty('isLoggedIn')); // very important method 



//  _________________________________  Object destructuring and JSON API ______________________________

const course = {
    coursename : "JS in Hindi",
    courseprice : 999,
    courseInstructor : "Hitesh sir",
}

//console.log(course.courseInstructor);

const {courseInstructor: Instructor} = course  // here,we use destructuring of courseInstructor by Instructor
console.log(Instructor);


// _______________________________  JSON API _____________________________

/*
{

    "name" : "Shubham",
    "coursename" : "JS in Hindi",
    "price" : "free"
}

*/