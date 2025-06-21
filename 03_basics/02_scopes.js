// global scope and local scope and block scope
//Block scope in JavaScript is the area within curly brackets, such as if, switch, for, and while loops, where variables are only accessible within that block

/*
var c=20
{
    let a=20
    const b=40
    var c= 80
    console.log(a);
    
}

console.log(a);
console.log(c);
console.log(b);

*/


//   _____________ nested scope  _____________

function one(){
    const username = "shubham"
    function Two(){
        const website = "youTube"
        console.log(username);
        console.log(website);
        
        
    }
    Two()
    //console.log(website);
    console.log(username);
    
    
}

//console.log(username);
one()


if(true){
    const username = "Shubham"
    console.log("shubham");
    if(true){
        const course = "JavaScript"
        console.log(course);
        if(true){
            const Teacher = "Hitesh sir"
            console.log(Teacher);
            console.log(course);
            console.log(username);
            
            
             
        }
        //console.log(Teacher);
        console.log(username);
        
        
        
    }
       // console.log(Teacher);
       // console.log(course);
        console.log(username);
    
}
    //console.log(Teacher);
    //console.log(course);
    console.log(username);



//  ++++++++++++++++++++++++ Interesting ++++++++++++++++++++

/*
//console.log(one(6));
function one(num){
    return num + 1;
}

//console.log(one(6));

//BUt


//addNum(6);
const addNum = function Two(num){
    return num + 2;
}
addNum(6)
//console.log(addNum(6));

*/
