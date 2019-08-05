// appending new data to a file


var fs = require('fs');

fs.appendFile('../message.txt', '\n\nSome new content.', function (err){
  if (err) throw err;
  console.log('Appended data to message.txt!');
})
