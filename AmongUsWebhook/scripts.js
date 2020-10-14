function unmute() {
	if (document.getElementById('mute').style.backgroundColor == 'red') {
        document.getElementById('mute').style.backgroundColor = 'rgb(68, 1, 1)';
        console.log("Currently unmuted")
	}
    document.getElementById('unmute').style.backgroundColor = 'greenyellow';
    document.getElementById('end').style.backgroundColor = '#02595c';

	var request = new XMLHttpRequest();
	request.open(
		'POST',
		'https://ptb.discord.com/api/webhooks/766026970932051998/SNmRIQT4rAOc2QGj9rXGu92z3MSDDoFq3K0KANbGqlqp2jQ1R7B-5TSbrCm6JhYpYbAJ'
	);

	request.setRequestHeader('Content-type', 'application/json');

	var params = {
		username: 'My Webhook Name',
		avatar_url: '',
		content: 'auwebhook unmute 756077054562271277'
	};

	request.send(JSON.stringify(params));
}

function mute() {
	if (document.getElementById('unmute').style.backgroundColor == 'greenyellow') {
        document.getElementById('unmute').style.backgroundColor = 'rgb(36, 59, 0)';
        console.log("Currently muted")
	}
	document.getElementById('mute').style.backgroundColor = 'red';
	document.getElementById('end').style.backgroundColor = '#02595c';

	var request = new XMLHttpRequest();
	request.open(
		'POST',
		'https://ptb.discord.com/api/webhooks/766026970932051998/SNmRIQT4rAOc2QGj9rXGu92z3MSDDoFq3K0KANbGqlqp2jQ1R7B-5TSbrCm6JhYpYbAJ'
	);

	request.setRequestHeader('Content-type', 'application/json');

	var params = {
		username: 'My Webhook Name',
		avatar_url: '',
		content: 'auwebhook mute 756077054562271277'
	};

	request.send(JSON.stringify(params));
}

function end() {
    document.getElementById('unmute').style.backgroundColor = 'rgb(36, 59, 0)';
    document.getElementById('mute').style.backgroundColor = 'rgb(68, 1, 1)';
    document.getElementById('end').style.backgroundColor = '#65DFE4';
	var request = new XMLHttpRequest();
	request.open(
		'POST',
		'https://ptb.discord.com/api/webhooks/766026970932051998/SNmRIQT4rAOc2QGj9rXGu92z3MSDDoFq3K0KANbGqlqp2jQ1R7B-5TSbrCm6JhYpYbAJ'
	);

	request.setRequestHeader('Content-type', 'application/json');

	var params = {
		username: 'My Webhook Name',
		avatar_url: '',
		content: 'auwebhook end 756077054562271277'
	};

	request.send(JSON.stringify(params));
}

function dead(userid) {
	var request = new XMLHttpRequest();
	request.open(
		'POST',
		'https://ptb.discord.com/api/webhooks/766026970932051998/SNmRIQT4rAOc2QGj9rXGu92z3MSDDoFq3K0KANbGqlqp2jQ1R7B-5TSbrCm6JhYpYbAJ'
	);

	request.setRequestHeader('Content-type', 'application/json');

	var params = {
		username: 'My Webhook Name',
		avatar_url: '',
		content: `au dead <@${userid}>`
    };
    request.send(JSON.stringify(params));
}

function revive(userid) {
	var request = new XMLHttpRequest();
	request.open(
		'POST',
		'https://ptb.discord.com/api/webhooks/766026970932051998/SNmRIQT4rAOc2QGj9rXGu92z3MSDDoFq3K0KANbGqlqp2jQ1R7B-5TSbrCm6JhYpYbAJ'
	);

	request.setRequestHeader('Content-type', 'application/json');

	var params = {
		username: 'My Webhook Name',
		avatar_url: '',
		content: `au revive <@${userid}>`
    };
    request.send(JSON.stringify(params));
}

function player(userid) {
	if (document.getElementById(event.target.id).style.backgroundColor == 'red') {
        document.getElementById(event.target.id).style.backgroundColor = ' #37c42a';
        revive(userid);
	} else {
        document.getElementById(event.target.id).style.backgroundColor = 'red';
        dead(userid);
	}
}
