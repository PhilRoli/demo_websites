function unmute() {
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
    document.
}
