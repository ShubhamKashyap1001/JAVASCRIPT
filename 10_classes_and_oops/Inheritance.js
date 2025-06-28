class User{
    constructor(username){
        this.username = username;
    }

    logMe(){
        console.log(`UserName is : ${this.username}`)
    }
}

class Students extends User{
    constructor(username,rollNo,percentage){
        super(username);
        this.rollNo = rollNo;
        this.percentage = percentage;
    }
    addCourse(){
        //return `A new Course is selected by ${this.username}`  
        console.log(`A new Course is selected by ${this.username}`);
        
    }
}

const student1 = new Students("Shubham",1,90);
student1.logMe();
student1.addCourse();

const student2 = new User("Abhishek",2,90);
student2.logMe()

console.log(student1 === student2);
//console.log(student1 instanceof student2);
console.log(student1 instanceof User);
console.log(student1 instanceof Students);
console.log(student2 instanceof Students);
console.log(student2 instanceof User);

