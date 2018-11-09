changeOrder();

function changeOrder(){
	var w = document.documentElement.clientWidth || document.body.clientWidth || window.innerWidth;
	var targetWidth = 980;
	if (w < targetWidth){
		document.getElementsByClassName("wrap")[0].innerHTML = '<div class = "wrap"><div id="road1" class="Queue"><div class="marker"><img class="roadImage" src="images/roadmap/Ellipse1.svg"><div class="markerTextUp">Q1</div></div><div class="roadText"><h2>Some title</h2><p>Some information<br>Some more info</p></div></div><div id="road2" class="Queue"><div class="marker"><img class="roadImage2" src="images/roadmap/Ellipse2.svg"><div class="markerTextDown"><b>Q2</b></div></div><div class="roadText"><h2>Some title</h2><p>Some information<br>Some more info</p></div></div><img id="TheRoad" src="images/roadmap/vector2.svg"><div id="road3" class="Queue"><div class="marker"><img class="roadImage" src="images/roadmap/Ellipse3.svg"><div class="markerTextUp">Q3</div></div><div class="roadText"><h2>Some title</h2><p>Some information<br>Some more info</p></div></div><div id="road4" class="Queue"><div class="marker"><img class="roadImage2" src="images/roadmap/Ellipse4.svg"><div class="markerTextDown">Q4</div></div><div class="roadText"><h2>Some title</h2><p>Some information<br>Some more info</p></div></div></div>'
	}

	if (w >= targetWidth){
		document.getElementsByClassName("wrap")[0].innerHTML = '<div class = "wrap"><div id="road1" class="Queue"><div class="marker"><img class="roadImage" src="images/roadmap/Ellipse1.svg"><div class="markerTextUp">Q1</div></div><div class="roadText"><h2>Some title</h2><p>Some information<br>Some more info</p></div></div><div id="road3" class="Queue"><div class="marker"><img class="roadImage" src="images/roadmap/Ellipse3.svg"><div class="markerTextUp">Q3</div></div><div class="roadText"><h2>Some title</h2><p>Some information<br>Some more info</p></div></div><img id="TheRoad" src="images/roadmap/vector2.svg"><div id="road2" class="Queue"><div class="marker"><img class="roadImage2" src="images/roadmap/Ellipse2.svg"><div class="markerTextDown"><b>Q2</b></div></div><div class="roadText"><h2>Some title</h2><p>Some information<br>Some more info</p></div></div><div id="road4" class="Queue"><div class="marker"><img class="roadImage2" src="images/roadmap/Ellipse4.svg"><div class="markerTextDown">Q4</div></div><div class="roadText"><h2>Some title</h2><p>Some information<br>Some more info</p></div></div></div>'
	}
}

