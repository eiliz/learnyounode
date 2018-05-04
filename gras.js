let gras = require('./grasModule');

function meow(err, list) {
	if(err) console.log(err);
	list.map(file => console.log(file));
}
let dir = process.argv[2];
let ext = process.argv[3];
gras(dir, ext, meow);
