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
let usernameValidation = false;

function askQuestion(number){
  process.stdout.write(`${questions[number]}\n`);
}

process.stdout.write(`What is your name?\n`);

process.stdin.on(`data`, function(data){
  if (usernameValidation === false) {
    username = data.toString().replace(/\s/g, '').toLowerCase().trim();

    if (fs.existsSync(`halloweenQuizResults/${username}.txt`)) {
      process.stdout.write(`Sorry, that username is taken! try another\n`);

    } else {
      const data = `quiz results for ${username}`;
      fs.writeFile(`halloweenQuizResults/${username}.txt`, data, (err) => {
        if (err) throw err;
      });

      usernameValidation = true;
      process.stdout.write(`Awesome. Nice to meet you, ${username}\n`);
      askQuestion(0);

    }
  } else {
      userAnswers.push(data.toString().trim());

      if (userAnswers.length === correctAnswers.length) {
        process.exit();

      } else {
        askQuestion(userAnswers.length);
      }
  }
})

process.on('exit', function(){
  for (var i = 0; i < userAnswers.length; i++) {
    if (userAnswers[i] === correctAnswers[i]){
      fs.appendFile(`halloweenQuizResults/${username}.txt`, `\nyou got question number ${i + 1} correct\n`, function (err){
        if (err) throw err;
        console.log(`appended data to halloweenQuizResults/${username}.txt`);
      })
    }

    else {
      fs.appendFile(`halloweenQuizResults/${username}.txt`, `\nyou got question number ${i + 1} incorrect; the correct answer was ${correctAnswers[i]}\n`, function (err){
        if (err) throw err;
        console.log(`appended data to halloweenQuizResults/${username}.txt`);

      })
    }
  }

  process.stdout.write(`You can check out your results in halloweenQuizResults/${username}.txt :)\n`);
});
