// for each loop kuch bhi return nhi karta hai

// const coding = ['js','ruby','python','java','cpp']

// const values = coding.forEach((items) => {
//     //console.log(items);
//     return items;
// })
// console.log(values);


//filter

//  const myNums = [1,2,3,4,5,6,7,8,9,10];

// // const newNums = myNums.filter((num) => num>4)
// // console.log(newNums);

// const newNums = myNums.filter((num) => {
//     return num > 4;
// })
// console.log(newNums);


const mynums = [1,2,3,4,5,6,7,8,9,10]

const newnums = []

mynums.forEach((num) => {
    if (num > 4) {
        newnums.push(num);
    }
})
//console.log(newnums);


const books= [
    {title: 'book one',genre: 'friction',published: 1990, edition: 2004},
    {title: 'book two',genre: 'Non-friction',published: 1998, edition: 2008},
    {title: 'book three',genre: 'friction',published: 1996, edition: 2010},
    {title: 'book four',genre: 'Non-friction',published: 1998, edition: 2014},
    {title: 'book five',genre: 'Non-friction',published: 2000, edition: 2014},
    {title: 'book six',genre: 'friction',published: 2008, edition: 2018},
    {title: 'book seven',genre: 'friction',published: 2010, edition: 2020},
]

let userBooks = books.filter((book) => {
    return book.edition > 2014;
})
//console.log(userBooks);

userBooks = books.filter((book) => {
    return book.genre === 'Non-friction' && book.published > 1990
})
//console.log(userBooks);


const students = [

    {name: 'shubham',rollNo: 1, phymarks: 93, chemarks:76, mathmarks:84},
    {name: 'abhishek',rollNo: 2, phymarks: 91, chemarks:87, mathmarks:80},
    {name: 'adarsh',rollNo: 3, phymarks: 90, chemarks:90, mathmarks:89},
    {name: 'harsh',rollNo: 4, phymarks: 83, chemarks:86, mathmarks:86},
    {name: 'lucky',rollNo: 5, phymarks: 93, chemarks:76, mathmarks:88},
    {name: 'sohan',rollNo: 6, phymarks: 91, chemarks:96, mathmarks:80},
    {name: 'tumul',rollNo: 7, phymarks: 95, chemarks:86, mathmarks:94},
]

let studentdata = students.filter((student) => {
    return student.phymarks < 90 ;
})
console.log(studentdata);
