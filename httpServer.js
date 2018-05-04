const http = require('http');
const fs = require('fs');
let port = Number(process.argv[2]);
let filePath = String(process.argv[3]);

const server = http.createServer((request, response) => {
	response.writeHead(200, { 'content-type': 'text/plain'});
	let fileStream = fs.createReadStream(filePath).pipe(response);
});

server.listen(port);
