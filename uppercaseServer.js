const http = require('http');
const map = require('through2-map');

const server = http.createServer((req, res) => {
	let {method} = req;
	let result = '';

	if(method == 'POST') {
		req.pipe(map(chunk => chunk.toString().toUpperCase())).pipe(res);	
//		req.on('data', chunk => result += chunk.toString().toUpperCase());
//		req.on('end', () => result);
	}
});

server.listen(Number(process.argv[2]));
