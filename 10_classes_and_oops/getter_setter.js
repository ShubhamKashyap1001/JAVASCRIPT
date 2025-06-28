class User{
    constructor(username,email,ID,password){
        this.username = username;
        this.email = email;
        this.ID = ID;
        this.password = password;
    }

    get password(){
        return `Password is ${this._password}shubham`
    }
    set password(value){
        this._password = value;
    }

    get email(){
        return this._email.toUpperCase();
    }
    set email(value){
        this._email = value;
    }
}

const chai = new User("chai","chai@gmail.com",24,"123chai")
console.log(chai.password);
console.log(`Email is : ${chai.email}`);

