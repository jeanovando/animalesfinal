window.addEventListener("load", function() {
	document.getElementById('ANIMALES').addEventListener("click", function() {
	alert("error animales");
		})
    })

var counter=1;
setInterval(function(){
	document.getElementById('radio' + counter).checked=true;
	counter++;
	if (counter > 4 ){
		counter = 1;
	}
},5000);