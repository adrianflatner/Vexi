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

// When the page scrolls
window.addEventListener("scroll", function(e) {
 
  // What % of the page is scrolled? 
  var scrollPercentage = (document.documentElement.scrollTop + document.body.scrollTop) / (document.documentElement.scrollHeight - document.documentElement.clientHeight);

  // Length to offset the dashes
  var drawLength = pathLength * scrollPercentage;
  
  // Draw in reverse
  road.style.strokeDashoffset = pathLength - drawLength;
    
  // When complete, remove the dash array, otherwise shape isn't quite sharp
  if (scrollPercentage >= 0.99) {
    road.style.strokeDasharray = 20; 
  } else {
    road.style.strokeDasharray = pathLength + ' ' + pathLength;
  }
  
  //When scrolling passed, the image will get the class visited
  
  document.getElementById("stepImg1").className=(scrollPercentage > 0.01)?"visited":"";
  document.getElementById("stepImg2").className=(scrollPercentage > 0.27)?"visited":"";
  document.getElementById("stepImg3").className=(scrollPercentage > 0.62)?"visited":"";
  document.getElementById("stepImg4").className=(scrollPercentage > 0.95)?"visited":"";

});