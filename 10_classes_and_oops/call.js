function setUsername(username){
    this.username = username;
    console.log("called")
}
function setPassword(password){
    this.password = password;
    console.log("Called password");
    
}

function createUser(username,email,password){
    setUsername.call(this,username);                //call ka use hum bus current execution context ko dusre function main pass karne ko nhi karte hai.

    this.email = email

    setPassword.call(this,password);                //call ka use refence pass karne ko karte hai aur this ka use apna referance pass karne ko 
}

const user = new createUser("chai","chai@google.com","chai12@");
console.log(user);
