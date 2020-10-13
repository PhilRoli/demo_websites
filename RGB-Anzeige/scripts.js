const messageIn = document.querySelector('#messageIn');
const header = document.querySelector('#header');
const body = document.querySelector('body');

let redvalue = 0;
let greenvalue = 0;
let bluevalue = 0;


document.getElementsByName('redIn').onkeypress = function(event) {
	if (event.keyCode == 13 || event.which == 13) {
		redvalue = messageIn.value;
		body.style.backgroundColor = rgb(redvalue, greenvalue, bluevalue);
	}
};

document.getElementsByName('greenIn').onkeypress = function(event) {
	if (event.keyCode == 13 || event.which == 13) {
		greenvalue = messageIn.value;
		body.style.backgroundColor = rgb(redvalue, greenvalue, bluevalue);
	}
};

document.getElementsByName('blueIn').onkeypress = function(event) {
	if (event.keyCode == 13 || event.which == 13) {
		bluevalue = messageIn.value;
		body.style.backgroundColor = rgb(redvalue, greenvalue, bluevalue);
	}
};
