// for
/*
for (let index = 0; index < 10; index++) {
    const element = index;
    console.log(element);
}
*/    

/*
for (let i = 0; i <= 10; i++) {
    const element = i;
    if(element === 5){
        console.log("5 is the best number");
        
    }
    console.log(element);
    
}




for (let i = 1; i <= 5; i++) {
    console.log(`Outer loop value : ${i}`);
    
    for (let j = 1; j <= 10; j++) {
       console.log(i + '*' + j + '=' + i*j);
       
        
    }
    
    
}

*/

/*
let myArray = ['Ironman' , 'hulk', 'Thor'];
for (let i = 0; i < myArray.length; i++) {
    const element = myArray[i];
    console.log(element);
    
}

*/

//break and continue

for (let i = 0; i < 20; i++) {
    if(i === 5){
        console.log(`5 is found`);
        break;
    }
    console.log(`Value of i is ${i}`);
    
    
}
for (let i = 0; i < 20; i++) {
    if(i === 5){
        console.log(`5 is found`);
        continue
    }
    console.log(`Value of i is ${i}`);
    
    
}