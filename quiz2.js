// https://github.com/19WDWU02/Node-JS-Introduction/blob/master/README.md

// ask for username
// --- ask a set of questions


const process = require('process');

const questions = [
  `should you dress a dog up like a goat for Hallowe'en?`,
  `should you dress a goat up like a dog for Hallowe'en?`,
  `should you make a dog wear a carven pumpkin helmet for Hallowe'en?`
];

const correctAnswers = [
  `definitely`,
  `also good`,
  `hard no`
];

let userAnswers = [];
let username;

// get userName
startQuiz = (input, err) => {
  process.stdout.write(`What is your name?\n`);

    if (err) {
      throw (err)
    } else {

      process.stdin.on('data', function(input){ // this one is always going to happen ; one process.on(data) per function.
                                                // more callbacks and functions 

        let username = input.toString().trim();

        // ask Q1
        // push the answer to userAnswers;
        // check if there are more questions - if yes, ask q2
        // if no, exit quiz

        askQuestion = () => {
          process.stdout.write(`${questions[userAnswers.length]}\n`);
          process.stdin.on(`data`, function(input) {
            let questionNumber = userAnswers.length;
            console.log(`answering ${questionNumber}`);
            let answer = input.toString().trim();
            userAnswers.push(answer);
            questionNumber = userAnswers.length;

            if (userAnswers.length === correctAnswers.length){
              console.log(`no more questions`);
              process.exit();
            } else {
              questionNumber = userAnswers.length;
              console.log('there are more questions');
              console.log(`now to answer ${questionNumber}`);

            }
          })
        }

        askQuestion();
      })
    }
}

// exit quiz
// -------- tell them how many questions they got right
// -------- tell them which questions they got wrong
// -------- tell them the correct answers to the questions they got wrong
// ------------- check to see if username.txt exists
// ------------------- if not, save the results as username.txt
// ------------------- if so, save the results as username(parseInt(username)+1).txt

startQuiz();
