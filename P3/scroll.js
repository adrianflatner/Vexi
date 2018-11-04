// Get a reference to the <path>
var path = document.querySelector('#star-path');

// Get length of path... 
var pathLength = path.getTotalLength();

// Jake Archibald says so
// https://jakearchibald.com/2013/animated-line-drawing-svg/
path.getBoundingClientRect();
path.style.transition = path.style.WebkitTransition =
'stroke-dashoffset 0.001s ease-in-out';

// When the page scrolls...
window.addEventListener("scroll", function(e) {
 
  // What % down is it? 
  // https://stackoverflow.com/questions/2387136/cross-browser-method-to-determine-vertical-scroll-percentage-in-javascript/2387222#2387222
  // Had to try three or four differnet methods here. Kind of a cross-browser nightmare.
  var scrollPercentage = (document.documentElement.scrollTop + document.body.scrollTop) / (document.documentElement.scrollHeight - document.documentElement.clientHeight);
  console.log(scrollPercentage);
  //Skjønte ikke en dritt av det her .Skjønte hva greia var, så skrev det sånn at jeg fikk til å jobbe med det //
  // //document.getElementById("step1").className=(scrollPercentage > 0.01)?"visited":"";
  // document.getElementById("step2").className=(scrollPercentage > 0.25)?"visited":"";
  // document.getElementById("step3").className=(scrollPercentage > 0.6)?"visited":"";
  // document.getElementById("step4").className=(scrollPercentage > 0.95)?"visited":"";
  
var step1 = document.getElementById("step1");
var step2 = document.getElementById("step2");
var step3 = document.getElementById("step3");
var step4 = document.getElementById("step4");

//Her kan visited.png byttes med screenshots
if(scrollPercentage > 0.01){
  erryBodyunvisit();
  step1.src="visited.png"
  step1.className = "visited";
  console.log(step1.className);
}
if(scrollPercentage > 0.27){
  erryBodyunvisit();
  step2.src="visited.png"
  step2.className = "visited";
}
if(scrollPercentage > 0.62){
  erryBodyunvisit();
  step3.src="visited.png"
  step3.className = "visited";
}
if(scrollPercentage > 0.95){
  erryBodyunvisit();
  step4.src="visited.png"
  step4.className = "visited";
}

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
  path.style.strokeDashoffset = pathLength - drawLength;
    
  // When complete, remove the dash array, otherwise shape isn't quite sharp
 // Accounts for fuzzy math
  if (scrollPercentage >= 0.99) {
    path.style.strokeDasharray = 20;
    
  } else {
    path.style.strokeDasharray = pathLength + ' ' + pathLength;
  }
  
});