const http = require('http');

http.get(process.argv[2], response => {
	response.setEncoding('utf-8');

	let result = '';

	response.on('data', data => result += data);

	response.on('end', () => {
		console.log(result.length);
		console.log(result);
	});

});


