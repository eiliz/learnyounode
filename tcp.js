const net = require('net');
const port = Number(process.argv[2]);

const server = net.createServer(socket => {
	let time = new Date();
	let data = time.getFullYear() + "-" + ("0" + (time.getMonth() + 1)).slice(-2) + "-" + time.getDate() + " " + ("0" + time.getHours()).slice(-2) + ":" + time.getMinutes() + "\n";
	socket.write(data);
	socket.on('data', data => console.log(data.toString()));
	socket.end();
});

server.listen(port, () => console.log("Listening on port" + String(port)));

var client = net.connect({port: port},
    	function() { //'connect' listener
 		console.log('connected to server!');
 	 	client.write('world!\r\n');
	});
client.on('data', function(data) {
	console.log(data.toString());
	client.end();
});
client.on('end', function() {
	console.log('disconnected from server');
});
