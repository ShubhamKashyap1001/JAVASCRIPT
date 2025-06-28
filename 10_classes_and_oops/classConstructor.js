//ES6

class User{
    constructor(username,email,password){
        this.username = username;
        this.email = email;
        this.password = password;
    }

    encryptPassword(){
        return (`Encrypted Password is : ${this.password}abc`)
    }

    changeUsername(){
        return `UserName is : ${this.username.toUpperCase()}`
    }
}

const chai = new User("chai","chai12@gmail.com","c1234");
console.log(chai.encryptPassword());
console.log(chai.changeUsername());


//Behind the scene

function User(username,email,password){
    this.username = username;
    this.email = email;
    this.password = password;
}

User.prototype.encryptPassword = function(){
    return `The Encrypted Password is : ${this.password}abc`
}

User.prototype.changeUsername = function(){
    return `UserName is : ${this.username.toUpperCase}`
}

const tea = new User("tea","tea123@gmail.com","tea123");
console.log(tea.encryptPassword());
console.log(tea.changeUsername());
