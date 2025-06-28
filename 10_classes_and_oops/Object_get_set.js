const User = {
    username : "shubham_12",
    _email : "shubham12@",
    _password : "@12",

    //here,get is a special method and email is the property trhyat allow method to access it.
    get email(){
        return this._email.toUpperCase();
    },
    set email(value){
        this._email = value
    },

    get password(){
        return `Password is ${this._password}shubham`
    },
    set password(value){
        this._password = value;
    },
}

const user1 = Object.create(User)
console.log(user1.email);
console.log(user1.password);
console.log(user1.username);

