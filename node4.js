var fs = require('fs');
var fileBuffer = fs.readFile(process.argv[2], 'utf-8', (error, file) => {
var newLines = file.split("\n");
console.log(newLines.length-1);
});
