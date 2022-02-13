function myfunction(){
    var x = 1024; //minimum value
    var y = 9999; //maximum value
    var deg = Math.floor(Math.random() * (x-y)) + y;
    document.getElementById('box').style.transform = "rotate("+deg+"deg)";
    var element = document.getElementById('mainbox');
    element.classList.remove('animate');
	setTimeout(function(){
        element.classList.add('animate');
        // lets print output
        const actualDeg = deg % 360;
				if (actualDeg>=0 && actualDeg<30 ){
                    alert("You lost")
					alert(actualDeg)
				}
				if (actualDeg>=30 && actualDeg<40 ){ //win
					alert("You won a shoe")
					alert(actualDeg)
				}
				if (actualDeg>=40 && actualDeg<135 ){ //win
					alert("You won a shoe")
					alert(actualDeg)
				}   
				if (actualDeg>=135 && actualDeg<150 ){ //lose
					alert("You lost")
					alert(actualDeg)
				}
				if (actualDeg>=150 && actualDeg<195 ){ //lose
					alert("You lost")
					alert(actualDeg)
				}
				if (actualDeg>=195 && actualDeg<230 ){ //lose
					alert("You lost")
					alert(actualDeg)
				}
				if (actualDeg>=230 && actualDeg<280 ){ //win
					alert("You won a shoe")
					alert(actualDeg)
				}
				if (actualDeg>=280 && actualDeg<315 ){ //win
					alert("You won a shoe")
					alert(actualDeg)
				}
				if (actualDeg>=315 && actualDeg<360 ){ //lose
					alert("You lost")
					alert(actualDeg)
				}
				console.log(actualDeg);
}, 5000);

}