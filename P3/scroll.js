//Inspired CSS-tricks-Scroll Drawing: https://css-tricks.com/scroll-drawing/?fbclid=IwAR1aq3enUu3jn1lcvCzbW6bRMoV2iClPHJYRSZSigVNpuf4wtWTygQpfxEI

// Get a reference to the roadsvg
var road = document.querySelector('#star-path');

// Get length of path... 
var pathLength = road.getTotalLength();

// Jake Archibald says so
// https://jakearchibald.com/2013/animated-line-drawing-svg/
road.getBoundingClientRect();
road.style.transition = road.style.WebkitTransition =
'stroke-dashoffset 0.001s ease-in-out';

// When the page scrolls...
window.addEventListener("scroll", function(e) {
 
  // What % down is it? 
  var scrollPercentage = (document.documentElement.scrollTop + document.body.scrollTop) / (document.documentElement.scrollHeight - document.documentElement.clientHeight);
  
  //Skjønte ikke en dritt av det her .Skjønte hva greia var, så skrev det sånn at jeg fikk til å jobbe med det //
  document.getElementById("step1").className=(scrollPercentage > 0.01)?"visited":"";
  document.getElementById("step2").className=(scrollPercentage > 0.27)?"visited":"";
  document.getElementById("step3").className=(scrollPercentage > 0.62)?"visited":"";
  document.getElementById("step4").className=(scrollPercentage > 0.95)?"visited":"";
  
var step1 = document.getElementById("step1");
var step2 = document.getElementById("step2");
var step3 = document.getElementById("step3");
var step4 = document.getElementById("step4");

//Her kan visited.png byttes med screenshots
// if(scrollPercentage > 0.01){
//   erryBodyunvisit();
//   step1.src="visited.png"
//   step1.className = "visited";
//   console.log(step1.className);
// }
// if(scrollPercentage > 0.27){
//   erryBodyunvisit();
//   step2.src="visited.png"
//   step2.className = "visited";
// }
// if(scrollPercentage > 0.62){
//   erryBodyunvisit();
//   step3.src="visited.png"
//   step3.className = "visited";
// }
// if(scrollPercentage > 0.95){
//   erryBodyunvisit();
//   step4.src="visited.png"
//   step4.className = "visited";
// }

function erryBodyunvisit(){
  step1.src="notVisited.png"
  step1.className = "unvisited";
  step2.src="notVisited.png"
  step2.className = "unvisited";
  step3.src="notVisited.png"
  step3.className = "unvisited";
  step4.src="notVisited.png"
  step4.className = "unvisited";
}

  // Length to offset the dashes
  var drawLength = pathLength * scrollPercentage;
  
  // Draw in reverse
  road.style.strokeDashoffset = pathLength - drawLength;
    
  // When complete, remove the dash array, otherwise shape isn't quite sharp
 // Accounts for fuzzy math
  if (scrollPercentage >= 0.99) {
    road.style.strokeDasharray = 20;
    
  } else {
    road.style.strokeDasharray = pathLength + ' ' + pathLength;
  }
  
});