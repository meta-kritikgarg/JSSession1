function getLargest() {
	var a = parseInt(document.getElementById('no1').value);
	var b = parseInt(document.getElementById('no2').value);
	var c = parseInt(document.getElementById('no3').value);
	
	var big;

	if(a>b && a>c) {
	    big = a; }
	   else if(b>c){
	    big = b;}
	   else{
	    big = c;}
	
	document.getElementById('result').innerHTML = "Largest no is = "+big;
}