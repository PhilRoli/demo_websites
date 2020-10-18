// Attributes & Functions used multiple times

// Username of the Webhook
var username = 'AmongUs Webhook';
// Avatar of the Webhook
var avatar_url = 'https://cdn.discordapp.com/avatars/766026970932051998/b4825dca8b822e97b460b05a61186343.png';
// URL of the Webhook
var webhook_url;
// Channel ID
var channelID = '756077054562271277';
// create new request
var request = new XMLHttpRequest();

// Button Functions Below

// unmutes all players with auwebhook unmute
function unmute() {
	if (document.getElementById('mute').style.backgroundColor == 'red') {
		document.getElementById('mute').style.backgroundColor = 'rgb(68, 1, 1)';
	}
	document.getElementById('unmute').style.backgroundColor = 'greenyellow';
	document.getElementById('end').style.backgroundColor = '#02595c';

	var params = {
		username: username,
		avatar_url: avatar_url,
		content: `auwebhook unmute ${channelID}`
	};
	// Open new request
	postRequest(params);
}

// mutes all players with auwebhook mute
function mute() {
	if (document.getElementById('unmute').style.backgroundColor == 'greenyellow') {
		document.getElementById('unmute').style.backgroundColor = 'rgb(36, 59, 0)';
	}
	document.getElementById('mute').style.backgroundColor = 'red';
	document.getElementById('end').style.backgroundColor = '#02595c';

	var params = {
		username: username,
		avatar_url: avatar_url,
		content: `auwebhook mute ${channelID}`
	};

	// Open new request
	postRequest(params);
}

// ends the game by calling auwebhook end and resets players
function end() {
	document.getElementById('unmute').style.backgroundColor = 'rgb(36, 59, 0)';
	document.getElementById('mute').style.backgroundColor = 'rgb(68, 1, 1)';
	document.getElementById('end').style.backgroundColor = '#65DFE4';
	resetPlayers();

	var params = {
		username: username,
		avatar_url: avatar_url,
		content: `auwebhook end ${channelID}`
	};

	// Open new request
	postRequest(params);
}

// Functions for Player buttons

// triggers au dead @user
function dead(userid) {
	var params = {
		username: username,
		avatar_url: avatar_url,
		content: `au dead <@${userid}>`
	};

	// Open new request
	postRequest(params);
}

// triggers au revive @user
function revive(userid) {
	var params = {
		username: username,
		avatar_url: avatar_url,
		content: `au revive <@${userid}>`
	};

	// Open new request
	postRequest(params);
}

// triggers dead or revive depending on current state
function player(userid) {
	if (document.getElementById(event.target.id).style.backgroundColor == 'red') {
		document.getElementById(event.target.id).style.backgroundColor = ' #37c42a';
		revive(userid);
	} else {
		document.getElementById(event.target.id).style.backgroundColor = 'red';
		dead(userid);
	}
}

// triggers when end button is clicked, resets all player colors
function resetPlayers() {
	for (let index = 1; index <= document.getElementsByClassName('bUsers').length; index++) {
		document.getElementById(index).style.backgroundColor = '#37c42a';
	}
}

// function for post requests
function postRequest(params) {
	var client = new XMLHttpRequest();
	client.open('GET', './auth.txt', true);
	client.responseType = 'text';

	client.onload = function() {
		if (client.readyState === client.DONE) {
			if (client.status === 200) {
				request.open('POST', client.responseText);
				request.setRequestHeader('Content-type', 'application/json');
				request.send(JSON.stringify(params));
			}
		}
	};

	client.send(null);
}
