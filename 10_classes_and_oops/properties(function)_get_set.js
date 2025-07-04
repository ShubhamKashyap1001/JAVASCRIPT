function User(email,password){
    this._email = email;
    this._password = password;

    Object.defineProperty(this,'email',{
        get: function(){
            return this._email.toUpperCase()
        },
        set: function(value){
            this._email = value;
        }
    })

    Object.defineProperty(this,"password",{
        get:function(){
            return `Password is ${this._password.toUpperCase()}@12`
        },
        set:function(value){
            this._password = value;
        }
    })
}

const chai = new User("chai12@google.com","chai");
console.log(chai.email);
console.log(chai.password);

