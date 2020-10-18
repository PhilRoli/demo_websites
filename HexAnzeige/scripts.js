const messageIn = document.querySelector('#messageIn');
const hex = document.querySelector('.hex');
const body = document.querySelector('body');

document.getElementById('messageIn').onkeypress = function(event) {
	if (event.keyCode == 13 || event.which == 13) {
		let hexcolor = messageIn.value;
		if(checkHex(hexcolor) == true) {
			body.style.backgroundColor = hexcolor;
			var L = calculateL(hexToRGB(hexcolor));
			if(L > 149) {
				hex.style.color = '#000000';
			} else {
				hex.style.color = '#ffffff';
			}
			messageIn.value = '#';
			rotateColor(hexcolor);
		}
		
	}
};

function checkHex(hexColor) {
	return /^#[0-9A-F]{6}$/i.test(hexColor);
}

function setColor(number, color) {
	document.getElementById(`LC${number}`).style.backgroundColor = color;
	if (color != '#00NANNAN') {
		document.getElementById(`LC${number}`).innerHTML = color;
	}

	changeColor(number);
}

function getColor(number) {
	return RGBToHex(document.getElementById(`LC${number}`).style.backgroundColor).toUpperCase();
}

function rotateColor(hexCol) {
	setColor(5, getColor(4));
	setColor(4, getColor(3));
	setColor(3, getColor(2));
	setColor(2, getColor(1));
	setColor(1, hexCol);
}

function RGBToHex(rgb) {
	// Choose correct separator
	let sep = rgb.indexOf(',') > -1 ? ',' : ' ';
	// Turn "rgb(r,g,b)" into [r,g,b]
	rgb = rgb.substr(4).split(')')[0].split(sep);

	let r = (+rgb[0]).toString(16),
		g = (+rgb[1]).toString(16),
		b = (+rgb[2]).toString(16);

	if (r.length == 1) r = '0' + r;
	if (g.length == 1) g = '0' + g;
	if (b.length == 1) b = '0' + b;

	return '#' + r + g + b;
}

function hexToRGB(h) {
	let r = 0, g = 0, b = 0;
  
	// 3 digits
	if (h.length == 4) {
	  r = "0x" + h[1] + h[1];
	  g = "0x" + h[2] + h[2];
	  b = "0x" + h[3] + h[3];
  
	// 6 digits
	} else if (h.length == 7) {
	  r = "0x" + h[1] + h[2];
	  g = "0x" + h[3] + h[4];
	  b = "0x" + h[5] + h[6];
	}
	
	return "rgb("+ +r + "," + +g + "," + +b + ")";
  }

function calculateL(rgb) {
	// Choose correct separator
	let sep = rgb.indexOf(',') > -1 ? ',' : ' ';
	// Turn "rgb(r,g,b)" into [r,g,b]
	rgb = rgb.substr(4).split(')')[0].split(sep);

	var L = 0.299 * rgb[0] + 0.587 * rgb[1] + 0.114 * rgb[2];

	return L;
}

function changeColor(number) {
	var rgbString = document.getElementById(`LC${number}`).style.backgroundColor;
	var calculatedL = calculateL(rgbString);
	if (calculatedL > 149) {
		document.getElementById(`LC${number}`).style.color = '#000000';
	} else {
		document.getElementById(`LC${number}`).style.color = '#ffffff';
	}
}
