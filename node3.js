var fs = require('fs');
var fileBuffer = fs.readFileSync(process.argv[2]);
var file = fileBuffer.toString();
var newLines = file.split("\n");
console.log(newLines.length-1);
