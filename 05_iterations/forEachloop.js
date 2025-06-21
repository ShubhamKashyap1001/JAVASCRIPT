/*
const coding = ["js","rb","py","java","cpp","reactjs"]

coding.forEach( function(item){
    console.log(item);
    
})

*/

// const coding = ["js","rb","py","java","cpp","reactjs"]

// coding.forEach( (item) => {
//     console.log(item);
    
// })
const coding = ["js","rb","py","java","cpp","reactjs"]

coding.forEach( (item,index,array) => {
    console.log(item, index, array);
    
})


const Identity = [
    {
        username: "Shubham",
        email: "shubham@gmail.com",
        age: 20,
        place: "kolkata",
    },
    {
        username: "lucky",
        email: "lucky@gmail.com",
        age: 16,
        place: "Bihar",
    },
    {
        username: "Abhishek",
        email: "Abhishek@gmail.com",
        age: 21,
        place: "Gujrat",
    }
]

Identity.forEach( (value) => {
    console.log(value.username);
    console.log(`He is ${value.age} year old , his email Id is ${value.email} who lived in ${value.place} now`);
    
})