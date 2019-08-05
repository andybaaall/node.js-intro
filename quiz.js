const process = require('process');
const questions = [
  `What do the hobbits of the Shire call the Grey Wizard?`,
  `What do the Men of Rohan call the Grey Wizard?`,
  `What do the elves and the descendants of Numenor call the Grey Wizard?`
];
const correctAnswers = [
  'Gandalf',
  'Gandalf Stormcrow',
  'Mithrandir'
];

let userAnswers = [];


askQuestions = (questions, data) {
  getQuestions = (err, data){
    if (err) {
      process.stdout.write(`${data} is the wrong answer; please try again.`);
    }
    data += 1;
    askQuestion();
  }
  getQuestions();
}



// from  https://nodejs.org/en/knowledge/getting-started/control-flow/what-are-callbacks/
function processData (callback) {
  fetchData(function (err, data) {
    if (err) {
      console.log("An error has occurred. Abort everything!");
      return callback(err);
    }
    data += 1;
    callback(data);
  });
}
// askQuestion(1);

// process.stdout.write(`${questions[0]}\n`);
//
// process.stdin.on('data', function(answer){
//   userAnswers.push(answer.toString().trim());
//
//   if (userAnswers[0] === correctAnswers[0]) {
//     console.log(`good job`);
//     process.exit();
//   } else {
//     userAnswers = [];
//     process.stdout.write(`${answer} is the wrong answer; please try again. ${questions[0]}`);
//   }
// });

process.stdout.on('exit', function(){
  process.stdout.write(`good job`);
})






// process.stdout.write(`what is 2 + 2? \n \n`);
//
// process.stdin.on('data', function(answer){
//   // whenever we input data .on('data'), run this function
//   // console.log(answer);
//   // what we get back here is a buffer; the binary version of our input
//   console.log(answer.toString().trim());
//   // what we get back now is a string, with the return keystroke trimmed off.
//
//   let inputAnswer = answer.toString().trim();
//   if (inputAnswer === '4'){
//     process.exit()
//     // stop the current process (specified with our const process)
//   } else {
//     process.stdout.write(`\n${inputAnswer} is the wrong answer; please try again.`)
//   }
// })
//
// process.on('exit', function(){
//   process.stdout.write(`\nwell done! you got it right. A+ grade for you`);
// })
