/*Copyright ©:TaurusInc. 2023*/
/*Code-Helper: Asuki Aoyama*/

var S = 0;
var Clicks = 0;
var currentAudio = [];
var currentVideo = null;
var Gif = document.querySelector("img"); 
const PopSound = new Audio("Sounds/Pop.mp3");
const WoldaPopSound = new Audio("Sounds/Vine.mp3");
var PopUpImg = document.querySelector("#PopUpImg");
var PopUp = document.querySelector(".PopUpContainer");
var PopUpHeading = document.querySelector("#PopUpHeading");
var PopUpParagraph = document.querySelector("#PopUpParagraph");

/*****************************************Play-Sound-Funktion*****************************************/ 
function playSound(soundFile) {

  stopAllSounds(); // Stop all currently playing sounds before starting a new one

  Clicks++; // Count button presses for PopUp-Action

  /***********************Check-Clicks***************************/
  if(Clicks === 5){
    stopAllSounds();
    PlayPopUpSound();
    setTimeout(OpenPopUp, 1000);
    PopUpImg.src ="Gifs/PopUpTerence.jpg";
    PopUpHeading.innerHTML = "Terence is coming!";
    PopUpParagraph.innerHTML = "10km away from you.";
  }

  if(Clicks === 10){
    stopAllSounds();
    PlayPopUpSound();
    setTimeout(OpenPopUp, 1000);
    PopUpImg.src ="Gifs/PopUpTerence.jpg";
    PopUpHeading.innerHTML = "Terence is coming!";
    PopUpParagraph.innerHTML = "5km away from you.";
  }

  if(Clicks === 15){
    OpenPopUp();
    stopAllSounds();
    PlayWoldaPopUpSound();
    PopUpImg.src ="Gifs/Wolda.jpg";
    PopUpHeading.innerHTML = "Mario Walder (ledig)";
    PopUpParagraph.innerHTML = "500m away from you.";
  }

  if(Clicks === 20){
   OpenPopUp();
   stopAllSounds();
   PlayPopUpSound();
   setTimeout(OpenPopUp, 1000);
   PopUpImg.src ="Gifs/PopUpTerence.jpg";
   PopUpHeading.innerHTML = "Terence is coming!";
   PopUpParagraph.innerHTML = "Directly behind you.";
  }

  if(Clicks === 25){
    OpenPopUp();
    stopAllSounds();
    PlayWoldaPopUpSound();
    PopUpImg.src ="Gifs/Wolda.jpg";
    PopUpHeading.innerHTML = "Mario Walder (ledig)";
    PopUpParagraph.innerHTML = "500m away from you.";
    Reset();
  }

  function Reset(){
    Clicks = 0;
  }

  var audio = new Audio(soundFile);
  audio.play();
  currentAudio.push(audio);
  
  // Change gif based on the currently playing song
  if (soundFile === "Sounds/TopG.mp3") {
    Gif.src = "Gifs/Tate-Walk.gif";
  } 
  else if (soundFile === "Sounds/MoshiMoshi.mp3") {
    Gif.src = "Gifs/Shinobu.gif";
  }
   else if (soundFile === "Sounds/Luxury.mp3") {
    Gif.src = "Gifs/Fischer.gif";
  } 
  else if (soundFile === "Sounds/Sus.mp3") {
    Gif.src = "Gifs/Amogus.gif";
  }
  else if (soundFile === "Sounds/CallMe.mp3") {
    Gif.src = "Gifs/PB-Dance.gif";
  }  
  else if (soundFile === "Sounds/WhatsUpGuys.mp3") {
    Gif.src = "Gifs/Fairy.gif";
  } 
  else if (soundFile === "Sounds/Chad.mp3") {
    Gif.src = "Gifs/Chad.gif";
  }
  else if (soundFile === "Sounds/BingChilling.mp3") {
    Gif.src = "Gifs/BingChilling.gif";
  }
  else if (soundFile === "Sounds/JohnCena.mp3") {
    Gif.src = "Gifs/JohnCena.gif";
  }
  else if (soundFile === "Sounds/Vine.mp3") {
    Gif.src = "Gifs/Wolda.jpg";
  }
  else if (soundFile === "Sounds/Beatbox.mp3") {
    Gif.src = "Gifs/Zelda.gif";
  }
  else if (soundFile === "Sounds/Boom.mp3") {
    Gif.src = "Gifs/Bomb.gif";
  }
  else if (soundFile === "Sounds/Willy.mp3") {
    Gif.src = "Gifs/Willy.gif";
  }
  else if (soundFile === "Sounds/Dinos.mp3") {
    Gif.src = "Gifs/Dino.gif";
  }
  else if (soundFile === "Sounds/ThePerfectGirl.mp3") {
    Gif.src = "Gifs/PB-Walk.gif";
  }
  else if (soundFile === "Sounds/Lamar-N.mp3") {
      Gif.src = "Gifs/Lamar-N.gif";
    }
  else if (soundFile === "Sounds/Yeet.mp3") {
      Gif.src = "Gifs/Yeet.gif";
    }
  else if (soundFile === "Sounds/Em-God.mp3") {
      setTimeout(Eminem, 1000);
    }
  else if (soundFile === "Sounds/TateVape.mp3") {
      Gif.src = "Gifs/Tate-Vape.gif";
    }
  else if (soundFile === "Sounds/Barbie.mp3") {
      Gif.src = "Gifs/Barbie.gif";
    }
  else if (soundFile === "Sounds/Willi.mp3") {
      Gif.src = "Gifs/Willi.png";
    }
  else if (soundFile === "Sounds/Homeless.mp3") {
      Gif.src = "Gifs/Homeless.gif";
    }
    else if (soundFile === "Sounds/Bird.mp3") {
      Gif.src = "Gifs/Terence3.gif";
    }

    else if (soundFile === "Sounds/BlueScream.mp3") {
      Gif.src = "Gifs/BlueScream.gif";
    }
    else if (soundFile === "Sounds/Britney.mp3") {
      Gif.src = "Gifs/Britney.gif";
    }
    else if (soundFile === "Sounds/Eiffel65.mp3") {
      Gif.src = "Gifs/Blue.gif";
    }
    else if (soundFile === "Sounds/Fire.mp3") {
      Gif.src = "Gifs/Fireplace.gif";
    }
    else if (soundFile === "Sounds/Hog.mp3") {
      Gif.src = "Gifs/Hog.gif";
    }
    else if (soundFile === "Sounds/ISDN.mp3") {
      Gif.src = "Gifs/Ronni.jpg";
    }
    else if (soundFile === "Sounds/KrabsWalking.mp3") {
      Gif.src = "Gifs/KrabsWalking.gif";
    }
    else if (soundFile === "Sounds/PBBas.mp3") {
      Gif.src = "Gifs/PBBas.gif";
    }
    else if (soundFile === "Sounds/Pipe.mp3") {
      Gif.src = "Gifs/Metal.gif";
    }
    else if (soundFile === "Sounds/Scream.mp3") {
      Gif.src = "Gifs/Scream.gif";
    }
    else if (soundFile === "Sounds/Ship.mp3") {
      Gif.src = "Gifs/Vide.png";
    }
    else if (soundFile === "Sounds/PBBitch.mp3") {
      Gif.src = "Gifs/PBBar.gif";
    }
    else if (soundFile === "Sounds/Thaddl.mp3") {
      Gif.src = "Gifs/Thaddl.gif";
    }
    else if (soundFile === "Sounds/Zirpen.mp3") {
      Gif.src = "Gifs/Grille.jfif";
    }
    else if (soundFile === "Sounds/Mind.mp3") {
      Gif.src = "Gifs/Mind.gif";
    }
    else if (soundFile === "Sounds/Black.mp3") { 
      Gif.src = "Gifs/Black.gif";
    }
    else if (soundFile === "Sounds/Tutel.mp3") {
      Gif.src = "Gifs/Tutel.gif";
    }
}

/*****************************************Change-Gif-Frame*****************************************/ 
var intervalId = window.setInterval(function() {
  if (S === 0) {
    LogInContainer.style.display = "block";
    buttons.style.zIndex = "-5000";
    B.style.opacity = "0";
  } else if (S === 1) {
    LogInContainer.style.display = "none";
    buttons.style.zIndex = "5000";
    B.style.opacity = "1";
  }
}, 1000);

/*****************************************Funktionen*****************************************/ 
function Eminem(){
	Gif.src = "Gifs/EmGod.gif";
}

/*****************************************Stop-All-Sounds-Funktion*****************************************/ 
function stopAllSounds() {
  for (var i = 0; i < currentAudio.length; i++) {
    currentAudio[i].pause();
    currentAudio[i].currentTime = 0;
  }
  currentAudio = [];
  Gif.src = "Gifs/Peter.gif"; //default gif
}

/*****************************************Play-PopUpSound-Funktion*****************************************/ 
function PlayPopUpSound(){
  PopSound.play();
}

function PlayWoldaPopUpSound(){
  WoldaPopSound.play();
}

/*****************************************Open-PopUp-Funktion*****************************************/ 
function OpenPopUp(){
  PopUp.style.display = "block";
}

/*****************************************Close-PopUp-Funktion*****************************************/ 
function ClosePopUp(){
  PopUp.style.display = "none";
}

let function0 = 'Taurus';
let function1 = 'Seppl';
let function2 = "Toth";
let function3 = "Otto";
let function4 = "Süd";
let function5 = "/*/*/";
let function6 = "/*/*/";
let function7 = "/*/*/";
let function8 = "/*/*/";
let function9  = "/*/*/";
let function10 = "/*/*/";

let background0 = "TaurusInc05052005";
let background1 = "S2806F";
let background2 = "Toth2oo5";
let background3 = "Ottmanach_187";
let background4 = "Länder";
let background5 = "//*/*/";
let background6 = "//*/*/";
let background7 = "//*/*/";
let background8 = "//*/*/";
let background9 = "//*/*/";
let background10 = "//*//*";