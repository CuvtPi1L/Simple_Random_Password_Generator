
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
    console.log(`fin ${password}`)
    document.getElementById("jeb").innerHTML = "1234567";
}

// function get_password(){
//     for (var i=0; i <= passwordLength; i++){
//         var randomNumber = Math.floor(Math.random()*chars.length);
//         password += chars.substring(randomNumber,randomNumber +1);
//     }
//     document.getElementById('password').innerHTML= password;
// }


console.log(password)

function copyPassword(){
    var copyText = document.getEleementById("password");
    copyText.select();
    document.execCommand('copy');
}

