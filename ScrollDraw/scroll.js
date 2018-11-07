// Get a reference to the <path>
var path = document.querySelector('#star-path');

// Get length of path... 
var pathLength = path.getTotalLength();

// Jake Archibald says so
// https://jakearchibald.com/2013/animated-line-drawing-svg/
path.getBoundingClientRect();
path.style.transition = path.style.WebkitTransition =
'stroke-dashoffset 0.01s ease-in-out';

// When the page scrolls...
window.addEventListener("scroll", function(e) {

  const scroller = document.getElementById('steps');
  
  // What % down is it? 
  // https://stackoverflow.com/questions/2387136/cross-browser-method-to-determine-vertical-scroll-percentage-in-javascript/2387222#2387222
  // Had to try three or four differnet methods here. Kind of a cross-browser nightmare.
  var scrollPercentage = (document.documentElement.scrollTop + document.body.scrollTop) / (document.documentElement.scrollHeight - document.documentElement.clientHeight);
  
  document.getElementById("step1").className=(scrollPercentage > 0.01)?"visited":"";
  document.getElementById("step2").className=(scrollPercentage > 0.25)?"visited":"";
  document.getElementById("step3").className=(scrollPercentage > 0.6)?"visited":"";
  document.getElementById("step4").className=(scrollPercentage > 0.95)?"visited":"";

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

function scrolling(){
  alert("SCROL")
  let height = scroller.clientHeight;
  let scrollHeight = scroller.scrollHeight - height;
  let scrollTop = scroller.scrollTop;
  let percent = Math.floor(scrollTop / scrollHeight * 100);
  document.getElementById('percent').innerText = 'Percent : '+percent+'%';
}