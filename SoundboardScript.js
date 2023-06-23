/*Copyright ©:TaurusInc. 2023*/
let S = 0;
var Clicks = 0;
var currentAudio = [];
let y = 2;
let G = O.value;
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
    PopUpImg.src ="Gifs/Hacker.jpg";
    PopUpHeading.innerHTML = "Attention!";
    PopUpParagraph.innerHTML = "Ugly hackers in your area.";
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
    Gif.src = "Gifs/4elda.gif";
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
    else if (soundFile === "Sounds/4irpen.mp3") {
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
  if (S === 0 && O ===0) {
    LogInContainer.style.display = "block";
    buttons.style.zIndex = "-5000";
    B.style.opacity = "0";
  } 
  if (O === 1 && S ===1) {
    LogInContainer.style.display = "block";
    buttons.style.zIndex = "-5000";
    B.style.opacity = "0";
  }
  if (O === 1 && S===0) {
    LogInContainer.style.display = "block";
    buttons.style.zIndex = "-5000";
    B.style.opacity = "0";
  } 
  if (S === 1  && O ===0) {
    clearTimeout(timeoutID);
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
const c = 2;

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
}let ii = 3;

/*****************************************Open-PopUp-Funktion*****************************************/ 
function OpenPopUp(){
  PopUp.style.display = "block";
}

/*****************************************Close-PopUp-Funktion*****************************************/ 
function ClosePopUp(){
  PopUp.style.display = "none";
}
        /* var n = 1500;
    
    var a = [],y = [],x = [],s = [],strs = [],
    d = document,
    cols = ['#9db4ff', '#a2b9ff', '#a7bcff',
    '#aabfff', '#afc3ff', '#baccff', '#c0d1ff',
    '#cad8ff', '#e4e8ff', '#edeeff', '#fbf8ff',
    '#fff9f9', '#fff5ec', '#fff4e8', '#fff1df',
    '#ffebd1', '#ffd7ae', '#ffc690', '#ffbe7f',
    '#ffbb7b', '#ffbb7b', '#fff', '#fff'];
    
    var container = d.createElement('div');
    container.setAttribute('style','display:block;'
    +'position:fixed;'
    +'height:100%;width:100%;'
    +'margin:auto;padding:0px;'
    +'top:0;left:0;left:0;right:0;'
    +'background-color:transparent;'
    +'overflow:hidden;');
    d.body.appendChild(container);
    
    for (var i = 0; i < n; i++){
        var col = cols[Math.random() * cols.length | 0];
        strs[i] = d.createElement('div');
        strs[i].setAttribute('style', 'display:block;'
        +'position:absolute;'
        +'border-radius:50%;'
        +'background-color:#fff;'
        +'box-shadow: 0 0 12px 1.2px '+col+';');
    container.appendChild(strs[i]);
    }

    function gen() {
        for (var i = 0; i < n; i++) {
            var r = Math.random() * 100 | 0;
            var cen = (r == 0)? 2.3 : 0.7;
            a[i] = Math.random() * Math.PI * 2;
            y[i] = 50 + Math.random() * 50 / cen * Math.sin(a[i]);
            x[i] = 50 + Math.random() * 50 / cen * Math.cos(a[i]);
            s[i] = 0.4 + Math.random() * 2;
            strs[i].style.transform = 'translate3d('+x[i]+'vw, '+y[i]+'vh, 0)';
            strs[i].style.width = (strs[i].style.height = (s[i]) + 'px');
            strs[i].style.opacity = s[i] / 3;
        }
 
         };*/




