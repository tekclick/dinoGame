const dino = document.getElementById("dino");
const obstacle1 = document.getElementById("gamestart");
var scoreCount = document.getElementById("scoreCount");
var counter = 0;
var speed = 1;
var soundLevelUp = document.getElementById("audio");
var soundSlide = document.getElementById("audio2");

// Game Start : launch obstacle on key up press
window.addEventListener("keydown", (start) => {
  if (start.keyCode == 32) {
    obstacle1.classList.add("obstacle1");
    animeScript();
  } else {
    counter == 0;
    scoreCount.innerHTML = "384400000";
  }
})

// ACTION FUNCTIONS
// Jump function for Doge Runner
function jump() {
  if (dino.classList != "jump") {
    //playAudio();
    dino.classList.add("jump");
    setTimeout(function() {
      dino.classList.remove("jump")
    }, 280);
  }
}

// Slide ACTION
function slide(){
  if (dino.classList !="slide"){
    // playSlide();
    dino.classList.add("slide");
    setTimeout(function(){
      dino.classList.remove("slide")
    }, 400);
  }
}

// LEVEL UP function
document.body.onkeyup = function(n){
    if(n.keyCode == 38){
      levelUp();
    }
}

var obstacle1LeftPosition = parseInt(window.getComputedStyle(obstacle1).getPropertyValue("left"));
function levelUp() {
  if (counter > 100) {
    document.getElementById("gamestart").style.animationDuration = "0.8s";
    console.log("level calculation");
  }
}


// Play sound FUNCTIONS
function playAudio(){
  soundLevelUp.play();
}

function playSlide(){
  soundSlide.play();
}

// GAME RULES : die if collision
let isAlive = setInterval(function() {
// get current dino Y position
let dinoTop = parseInt(window.getComputedStyle(dino).getPropertyValue("top"));

// get current obstacle1 X position
let obstacle1Left = parseInt(window.getComputedStyle(obstacle1).getPropertyValue("left"));
  console.log(obstacle1Left);

  // detect colision
  if (obstacle1Left < 50 && obstacle1Left > 0 && dinoTop >= 160) {
    // collision
    alert("game over. " + "Your score is " + Math.floor(counter / 1) + "m run.");
    scoreCount.innerHTML = counter;
    obstacle1.classList.remove("obstacle1");
    document.getElementById("gamestart").style.animationDuration = "1.3s";
    counter = 0;
    scoreCount.innerHTML = "384400000";

  } else {
    if (obstacle1.classList == "obstacle1") {
      counter++;
      scoreCount.innerHTML = 384400000 - (Math.floor(counter / 1));
    }
  }
}, 40); //20 works well

// Trigger jump on keydown
document.body.onkeydown = function(e) {
  if (e.keyCode == 38) {
    jump();
  }
  else {
    if (e.keyCode == 40){
      slide();
    }
  }
};


// Animating doge runner Sprite
// use this variable to clear the setInterval
var tID;
var position = 0;
var interval = 120;

tID = setInterval(() => {
  document.getElementById("dino").style.backgroundPosition =
    `-${position}px 0px`;
  //we use the ES6 template literal to insert the variable "position"
  if (position < 50) {
    position = position + 50;
  }
  //we increment the position by 256 each time
  else {
    position = 0;
  }
  //reset the position to 256px, once position exceeds 1536px
}, interval);

function animeScript() {
  document.getElementById("dino").style.backgroundPosition = `-50px 0px`;
}
