// read file
// async file read

var fs = require('fs');

fs.readFile('../message.txt', function(err, data) {
  console.log(data.toString().trim());
  if (err) throw err;
})
