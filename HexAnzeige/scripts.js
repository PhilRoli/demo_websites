const messageIn = document.querySelector('#messageIn');
const header = document.querySelector('#header');
const body = document.querySelector('body');

document.getElementById('messageIn').onkeypress = function(event) {
	if (event.keyCode == 13 || event.which == 13) {
		let hexcolor = messageIn.value;
		body.style.backgroundColor = hexcolor;
		// console.log(hexcolor);
	}
};
