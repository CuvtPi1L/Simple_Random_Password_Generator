
var password=document.getElementById("password")

var chars = "0123456789abcdefghijklmnopqrstuvwxyz!@#$%^&*()ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var passwordLength = prompt('how long do you want your password to be?');
var password = ""

function get_password(){
    for(var i = 0; i <= passwordLength; i++){
        var randomNumber = Math.floor(Math.random()* chars.length);
        password += chars.substring(randomNumber,randomNumber +1);
        console.log(password);
    }
    //password gen functiom
    console.log(`fin ${password}`)
}


//first achieve gen button fucntion 

function button_get_password(){
    //if I just creat more objects, might make it work, but way messer
    get_password();
    sure = password;
    console.log(`I'm sure ${password}`);
    var init = document.getElementById("jeb");
    init.value = sure //can't put value behind object unless a input 
}



