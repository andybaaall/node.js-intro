// https://github.com/19WDWU02/Node-JS-Introduction/blob/master/README.md

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
let usernameValidation = false;


process.stdout.write(`What is your name?\n`);

process.stdin.on(`data`, function(input){
	let response = input.toString().trim();
	console.log(`input was ${response};`);

	process.stdout.write(`${questions[0]}\n`)
	console.log(`input was ${response};`);
	userAnswers.push(response);
	console.log(userAnswers);

	// I think it's necessary to push every user answer into the userAnswers[] array, in order to check whether each answer is correct.
	// in order to do this, I think it's necessary to redefine <response>
	// ... but this can't be done without using another process.standin.on('data', ...)
	// ... which it shouldn't, because only one process.standin.on('data', ...) should run per script?

});









// exit quiz
// -------- tell them how many questions they got right
// -------- tell them which questions they got wrong
// -------- tell them the correct answers to the questions they got wrong
// ------------- check to see if username.txt exists
// ------------------- if not, save the results as username.txt
// ------------------- if so, save the results as username(parseInt(username)+1).txt
