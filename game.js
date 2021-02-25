const dino = document.getElementById("dino");
const obstacle1 = document.getElementById("gamestart");
var scoreCount = document.getElementById("scoreCount");
var counter = 0;


// Game Start
window.addEventListener("keydown", (start) => {
  if(start.keyCode == 38){
    obstacle1.classList.add("obstacle1");
    animeScript();
  }
})

// Action functions
// Jump function
function jump(){
  if(dino.classList != "jump"){
    dino.classList.add("jump");

    setTimeout(function(){
    dino.classList.remove("jump")}, 400);
  }
}

// Game rules
let isAlive = setInterval(function() {
// get current dino Y position
let dinoTop = parseInt(window.getComputedStyle(dino).getPropertyValue("top"));

// get current obstacle1 X position
let obstacle1Left = parseInt(window.getComputedStyle(obstacle1).getPropertyValue("left"));
console.log(obstacle1Left);

  // detect colision
  if(obstacle1Left < 50 && obstacle1Left > 0 && dinoTop >= 140)
  {
    // collision
    alert("game over" + "score is " + Math.floor(counter/100));
    scoreCount.innerHTML = counter;
    obstacle1.classList.remove("obstacle1")
    counter = 0;
  }
  else {
    counter++;
    scoreCount.innerHTML = Math.floor(counter/100);
  }
}, 10);



document.body.onkeydown = function(e){
    if(e.keyCode == 38){
      jump();
    }
};


// Animating doge runner
// use this variable to clear the setInterval
var tID;
var position = 0;
const interval = 140;

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


function animeScript(){
  document.getElementById("dino").style.backgroundPosition = `-50px 0px`;
}