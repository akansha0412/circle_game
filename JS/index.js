var score = 0;
var circleBtn = document.querySelectorAll(".dot");
for (var i = 0; i < circleBtn.length; ++i) {
    circleBtn[i].addEventListener('click', circleHit);
}


function circleHit(){
	//alert('circle hit');
	var clr = this.className;
	if(clr=='dot_active')
	{
		score++;
		var index = Math.floor(Math.random() * circleBtn.length);
		for (var i = 0; i < circleBtn.length; ++i) {
    i==index ? circleBtn[i].className = "dot_active" : circleBtn[i].className = "dot" ;
	}
	}
	else{
		score--;
	}
}

function play()
{
	
        var index = Math.floor(Math.random() * circleBtn.length);
        circleBtn[index].className = "dot_active";
}
function stop()
{
	alert ("Your score is "+ score)
	for (var i = 0; i < circleBtn.length; ++i) {
    circleBtn[i].className = "dot";
}
score = 0;
}