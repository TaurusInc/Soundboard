/*Copyright © AsukiAoyama 2023*/

/*****************************************User-Names*****************************************/
let user0 = 'Taurus';
let user1 = 'Seppl';
let user2 = "Toth";
let user3 = "Süd";
let user4 = "/";
let user5 = "/";
let user6 = "/";
let user7 = "/";
let user8 = "/";
let user9 = "/";
let user10 = "/";

/*****************************************User-Passwords*****************************************/
let password0 = "TaurusInc05052005";
let password1 = "2806";
let password2 = "2005";
let password3 = "Länder";
let password4 = "/";
let password5 = "/";
let password6 = "/";
let password7 = "/";
let password8 = "/";
let password9 = "/";
let password10 = "/";

/*****************************************User-Changing-Variables*****************************************/
let LogInContainer = document.querySelector(".LogInContainer");
let Name = document.querySelector(".Name");
let X = "/";

/*****************************************Check-User-Funktions*****************************************/
function UpdateUserPage(){

/*****************************************User-Input-Names*****************************************/
let userInput = document.getElementById("username").value;

/*****************************************User-Input-Passwords*****************************************/
let passwordInput = document.getElementById("password").value;

    if(user0 === userInput && password0 === passwordInput){
        X = `Hello ${user0}!, thank you for creating my pain.`;
        LogInContainer.style.display = "none";
        Name.innerHTML = "By"+ user0;
        //do stuff
    }

    if(user1 === userInput && password1 === passwordInput){
        X = `Hello ${user1}!, thank you for using Soundboard.\n#1`;
        LogInContainer.style.display = "none";
        Name.innerHTML = "For"+ user1;
        //do stuff
    }

    if(user2 === userInput && password2 === passwordInput){
        X = `Hello ${user2}!, thank you for using Soundboard.\n#2`;
        LogInContainer.style.display = "none";
        Name.innerHTML = "For"+ user2;
        //do stuff
    }

    if(user3 === userInput && password3 === passwordInput){
        X = `Hello ${user3}!, thank you for using Soundboard.\n#3`;
        LogInContainer.style.display = "none";
        Name.innerHTML = "For"+ user3;
        //do stuff
    }

    if(user4 === userInput && password4 === passwordInput){
        X = `Hello ${user4}!, thank you for using Soundboard.\n#4`;
        LogInContainer.style.display = "none";
        Name.innerHTML = "For"+ user4;
        //do stuff
    }

    if(user5 === userInput && password5 === passwordInput){
        X = `Hello ${user5}!, thank you for using Soundboard.\n#5`;
        LogInContainer.style.display = "none";
        Name.innerHTML = "For"+ user5;
        //do stuff
    }

    if(user6 === userInput && password6 === passwordInput){
        X = `Hello ${user6}!, thank you for using Soundboard.\n#6`;
        LogInContainer.style.display = "none";
        Name.innerHTML = "For"+ user6;
        //do stuff
    }

    if(user7 === userInput && password7 === passwordInput){
        X = `Hello ${user7}!, thank you for using Soundboard.\n#7`;
        LogInContainer.style.display = "none";
        Name.innerHTML = "For"+ user7;
        //do stuff
    }

    if(user8 === userInput && password8 === passwordInput){
        X = `Hello ${user8}!, thank you for using Soundboard.\n#8`;
        LogInContainer.style.display = "none";
        Name.innerHTML = "For"+ user8;
        //do stuff
    }

    if(user9 === userInput && password9 === passwordInput){
        X = `Hello ${user9}!, thank you for using Soundboard.\n#9`;
        LogInContainer.style.display = "none";
        Name.innerHTML = "For"+ user9;
        //do stuff
    }

    if(user10 === userInput && password10=== passwordInput){
        X = `Hello ${user10}!, thank you for using Soundboard.\n#10`;
        LogInContainer.style.display = "none";
        Name.innerHTML = "For"+ user10;
        //do stuff
    }
}

window.onkeydown = function(event) {
    if (event.keyCode === 32) {
      alert(X);
    }
 };

