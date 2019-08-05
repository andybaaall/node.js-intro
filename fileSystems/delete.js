const fs = require('fs');
let filepath = '../message.txt';

fs.unlink(filepath, (err) => {
  if (err) throw err;
  console.log(`${filepath} was deleted`);
});
