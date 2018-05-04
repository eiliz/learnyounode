const http = require('http');
const url = require('url');

const server = http.createServer((req, res) => {
	let urlObj = url.parse(req.url, true);
	let resType = urlObj.pathname.slice(5);
	let time = new Date(urlObj.query.iso);
	let result = '';

	switch (resType){
	case "parsetime":
		result = {
			"hour": time.getHours(),
			"minute": time.getMinutes(),
			"second": time.getSeconds()
		};
		break;

	case "unixtime":
		result = { "unixtime": Math.abs(time.getTime())};
		break; 

	}

	if(result) {

		res.writeHead(200, { 'Content-Type': 'application/json'});

		res.end(JSON.stringify(result));
	} else {
		res.writeHead(404);
		res.end();

	}
	
});

server.listen(Number(process.argv[2]));
