const fs = require('fs');
const process = require('process');

startMessage = () => {
  process.stdout.write('what is your name?\n');
}

// https://nodejs.org/api/fs.html#fs_fs_writefile_file_data_options_callback
// the Node.js documentation is pretty good!

process.stdin.on('data', function(answer){
  let inputAnswer = answer.toString().trim();
  const data = `hello there ${inputAnswer}`;
  fs.writeFile('../message.txt', data, (err) => {
    if (err) throw err;
    console.log('file saved!');
    process.exit();
  })
})

startMessage();
