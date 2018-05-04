const http = require('http');

const urls = [
	process.argv[2],
	process.argv[3],
	process.argv[4]
];

function getURLPromise(url) {
	return new Promise((resolve, reject) => {
			http.get(url, response => {
				let result = '';
				response.setEncoding('utf-8');

				response.on('data', data => result += data);
				response.on('end', () => resolve(result));

				response.on('error', err => reject(err));
		});
	});
}

getURLPromise(urls[0]).then(response => {
	console.log(response);

	getURLPromise(urls[1]).then(response => {
		console.log(response);

		getURLPromise(urls[2]).then(response => console.log(response));
	});
});
