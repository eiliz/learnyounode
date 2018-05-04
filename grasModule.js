const path = require('path');
const fs = require('fs');

module.exports = function(dir, extension, callback) {
	fs.readdir(dir, (err, list) => {
       		if(err) return callback(err);
		extension = "." + extension;
        	callback(null, list.filter(file => path.extname(file) == extension));
	});
};


