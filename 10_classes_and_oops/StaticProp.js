class User{
    constructor(username){
        this.username = username;
    }

    logMe(){
        console.log(`Username is : ${this.username}`);
        
    }
    //when we use static before any method then we can't access this given method.
     static createId(){
        return `12`
    }
}

class Students extends User{
    constructor(username,email,password){
        super(username);
        this.email = email;
        this.password = password;
    }
}

const shubham = new User("Shubham Kashyap");
//console.log(shubham.createId());

const lucky = new Students("Lucky","Lucky123@gmail.com","123lucky");
lucky.logMe();
//console.log(lucky.createId());

