const header = document.querySelector('#header');
const body = document.querySelector('body');
const valueBox = document.querySelector('.value');

var redSlider = document.getElementById('redIn');
var greenSlider = document.getElementById('greenIn');
var blueSlider = document.getElementById('blueIn');

let redvalue = 0;
let greenvalue = 0;
let bluevalue = 0;
let avarage = (redvalue + greenvalue + bluevalue) / 3;
var thergb = 'rgb(' + redvalue + ',' + greenvalue + ',' + bluevalue + ')';
updatergb();

// Update the current slider value (each time you drag the slider handle)
redSlider.oninput = function() {
	redvalue = this.value;
	updatergb();
	console.log(redvalue + ',' + greenvalue + ',' + bluevalue);
	document.body.style.backgroundColor = thergb;
};

greenSlider.oninput = function() {
	greenvalue = this.value;
	updatergb();
	console.log(redvalue + ',' + greenvalue + ',' + bluevalue);
	document.body.style.backgroundColor = thergb;
};

blueSlider.oninput = function() {
	bluevalue = this.value;
	updatergb();
	console.log(redvalue + ',' + greenvalue + ',' + bluevalue);
	document.body.style.backgroundColor = thergb;
};

function updatergb() {
	thergb = 'rgb(' + redvalue + ',' + greenvalue + ',' + bluevalue + ')';
	valueBox.innerHTML = thergb;
	changeTextcolor();
}

function updateAvarage() {
	avarage = redvalue + greenvalue + bluevalue;
	avarage = avarage / 100;
	avarage = avarage / 3;
	console.log('Avrage: ' + avarage);
}

function changeTextcolor() {
	updateAvarage();
	if (avarage >= 255) {
		valueBox.style.color = 'black';
	} else {
		valueBox.style.color = 'white';
	}
}
