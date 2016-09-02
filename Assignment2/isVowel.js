function getType() {
	var str = document.getElementById('ch').value;
	var ch = str.charAt(0);
	
	switch(ch) {
	case 'a':
	case 'e':
	case 'i':
	case 'o':
	case 'u':
	case 'A':
	case 'E':
	case 'I':
	case 'O':
	case 'U':
		document.getElementById('result').innerHTML = "First char is Vowel ";
		break;
	default:
		document.getElementById('result').innerHTML = "First char is Consonant ";
	}
	
}