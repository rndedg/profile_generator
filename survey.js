const readline = require('readline');

const questions = {
  0: "What is your name?",
  1: "What an activity you like doing?",
  2: "Why type of music do you like to listen to while doing that?",
  3: "What is your favorite sport to watch?",
  4: "What is your favorite snack to eat while watching that sport?",
  5: "Tell us about a special skill you have!"
};

const answerObject = {
  0: "",
  1: "",
  2: "",
  3: "",
  4: "",
  5: ""
};

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

let i = 0;
const question = () => {

  
  if (i < 6) {
    rl.question(`${questions[i]}\n`, (answer) => {
      answerObject[i] = answer;
      i++;
      console.log();
      question();
    });
  } else {
    rl.close();
    console.log("Your Profile:");
    setTimeout(() => console.log(` ${answerObject[0]} likes ${answerObject[1]} while listening to ${answerObject[2]}. They like eating ${answerObject[4]} while watching ${answerObject[3]}. We asked them about a special skill they have and they answerwed: ${answerObject[5]}`), 1500);
  }
};

question();
