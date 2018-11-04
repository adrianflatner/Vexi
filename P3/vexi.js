
window.onscroll = function() {makewhite()};

const feature = document.getElementById("feature");
const feature2 = document.getElementById("feature2");
const feature3 = document.getElementById("feature3");
const feature4 = document.getElementById("feature4");
const listoffeatures = [feature, feature2, feature3, feature4];
const contentA = document.getElementById("contentA");
const contentB = document.getElementById("contentB");
const contentC = document.getElementById("contentC");
const contentD = document.getElementById("contentD");
const listofcontent = [contentA, contentB, contentC, contentD];

function makewhite(){
	const phone = document.getElementById("step1").offsetTop;
	const phone2 = document.getElementById("step2").offsetTop;
	const phone3 = document.getElementById("step3").offsetTop;
	const phone4 = document.getElementById("step4").offsetTop;
	//var docscroll = document.documentElement.scrollTop;
	var scrollPercentage = (document.documentElement.scrollTop + document.body.scrollTop) / (document.documentElement.scrollHeight - document.documentElement.clientHeight);

	if(scrollPercentage > 0.1 && scrollPercentage < 0.25){
		feature.style.backgroundColor = "white";
		feature2.style.backgroundColor = "#373E56";
		contentA.style.color = "#373E56";
		contentB.style.color = "white";
		}
	if(scrollPercentage > 0.25 && scrollPercentage < 0.6){
		feature.style.backgroundColor = "#373E56";
		feature2.style.backgroundColor = "white";
		feature3.style.backgroundColor = "#373E56";
		contentA.style.color = "white";
		contentC.style.color = "white";
		contentB.style.color = "#373E56";
	}
	if(scrollPercentage > 0.6 && scrollPercentage < 0.95){
		feature2.style.backgroundColor = "#373E56";
		feature3.style.backgroundColor = "white";
		feature4.style.backgroundColor = "#373E56";
		contentB.style.color = "white";
		contentD.style.color = "white";
		contentC.style.color = "#373E56";

	}
	if((scrollPercentage > 0.95)){
		feature3.style.backgroundColor = "#373E56";
		feature4.style.backgroundColor = "white";
		contentC.style.color = "white";
		contentD.style.color = "#373E56";		
	}
}

function mewhite(string){
	for(i in listoffeatures){
		listoffeatures[i].style.backgroundColor = "#373E56";
		listofcontent[i].style.color = "white";
	}
	document.getElementById(string).style.backgroundColor ="white";
}



