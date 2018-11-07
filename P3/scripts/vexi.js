
window.onscroll = function() {updateMenu()};


//getting menuElements (features)
const feature = document.getElementById("feature");
const feature2 = document.getElementById("feature2");
const feature3 = document.getElementById("feature3");
const feature4 = document.getElementById("feature4");


function updateMenu(){
	//getting scrollPercentage of side
	var scrollPercentage = (document.documentElement.scrollTop + document.body.scrollTop) / (document.documentElement.scrollHeight - document.documentElement.clientHeight);
	
	//updating classNames while scrolling the page
	feature.className=(scrollPercentage > 0.1 && scrollPercentage < 0.25)?"feature selected":"feature";
  	feature2.className=(scrollPercentage > 0.25 && scrollPercentage < 0.6)?"feature selected":"feature";
  	feature3.className=(scrollPercentage > 0.6 && scrollPercentage < 0.95)?"feature selected":"feature";
  	feature4.className=(scrollPercentage > 0.95)?"feature selected":"feature";
	
}

