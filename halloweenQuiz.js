const process = require('process');
const fs = require('fs');

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
let userCorrectAnswers = [];
let usernameValidation = false;

function askQuestion(number){
  process.stdout.write(`${questions[number]}\n`);
};

process.stdout.write(`What is your name?\n`);

process.stdin.on(`data`, function(data){
  if (usernameValidation === false) {
    username = data.toString().replace(/\s/g, '').toLowerCase().trim();

    if (fs.existsSync(`halloweenQuizResults/${username}.txt`)) {
      process.stdout.write(`Sorry, that username is taken! try another\n`);

    } else {
      const writeFileInput = `quiz results for ${username}`;

      fs.writeFile(`halloweenQuizResults/${username}.txt`, writeFileInput, (err) => {
        if (err) throw err;
      });

      usernameValidation = true;
      process.stdout.write(`Awesome. Nice to meet you, ${username}\n`);
      askQuestion(0);
    }
  } else {
    userAnswers.push(data.toString().trim());

    if (userAnswers.length === correctAnswers.length) {
      for (var i = 0; i < userAnswers.length; i++) {
        if (userAnswers[i] === correctAnswers[i]) {
          userCorrectAnswers.push(userAnswers[i]);

          fs.appendFileSync(`halloweenQuizResults/${username}.txt`, `\nQ${i + 1}. - good job, you got this one right!`, function (err){
            if (err) throw err;
          }) // appendFileSync
        } else {
          fs.appendFileSync(`halloweenQuizResults/${username}.txt`, `\nQ${i + 1}. - you said "${data.toString().trim()}", but the correct answer was "${correctAnswers[i]}."`, function (err){
            if (err) throw err;
          }) // appendFileSync()
        } // else
      } // for loop
      process.exit();
    } else {
      askQuestion(userAnswers.length);
    } // else
  } // else
}) // on('data')

process.on(`exit`, function(){
  console.log(`good job! you can check your results in the ${username}.txt file`);
  console.log(`(By the way, you got ${userCorrectAnswers.length} out of ${questions.length} correct.)`);

});
