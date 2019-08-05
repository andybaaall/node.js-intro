// https://github.com/19WDWU02/Node-JS-Introduction/blob/master/README.md

// ask for username
// --- ask a set of questions
// -------- tell them how many questions they got right
// -------- tell them which questions they got wrong
// -------- tell them the correct answers to the questions they got wrong
// ------------- check to see if username.txt exists
// ------------------- if not, save the results as username.txt
// ------------------- if so, save the results as username(parseInt(username)+1).txt

const process = require('process');

const questions = [
  `should you dress a dog up like a goat for Hallowe'en?`,
  `should you dress a goat up like a dog for Hallowe'en?`,
  `should you make a dog wear a carven pumpkin helmet for Hallowe'en?`
];

const answers = [
  'definitely',
  'also good',
  'hard no'
];

let userAnswers = [];

quiz = () => {
  askQuestion = (number) => {
    process.stdout.write(`${questions[number]}\n`);
    let questionNumber = userAnswers.length;

    process.stdin.on('data', function(answer){
      
    }
}

quiz();
