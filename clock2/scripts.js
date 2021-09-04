function showTime() {
	const date = new Date();
	let hours = addZero(date.getHours());
	let minutes = addZero(date.getMinutes());
	let seconds = addZero(date.getSeconds());
	let day = addZero(date.getDate());
	let month = addZero(date.getMonth() + 1);
	let year = date.getFullYear();

	let time = `${hours}:${minutes}:${seconds}`;
	let fullDate = `${year} ${month} ${day}`;

	$('#clock').sevenSeg({ digits: 8, value: time, colorOff: '#000' });

	$('#date').sevenSeg({ digits: 50, value: fullDate, colorOff: '#000' });
}

function addZero(time) {
	if (time < 10) {
		time = '0' + time;
	}
	return time;
}

setInterval(showTime, 1000);
