import readlineSync from 'readline-sync';
import { user, greeting, operators, congrats } from '../index.js';

console.log(`${greeting}\nWhat is the result of the expression?`);

for (let i = 0; i < 3;) {
  const randomNumber1 = parseInt((Math.floor(Math.random() * 30)), 10);
  const randomNumber2 = parseInt((Math.floor(Math.random() * 30)), 10);
  const randomOperator = operators[Math.floor(Math.random() * operators.length)];
  let correctAnswer;
  switch (randomOperator) {
    case '+':
      correctAnswer = randomNumber1 + randomNumber2;
      break;
    case '-':
      correctAnswer = randomNumber1 - randomNumber2;
      break;
    case '*':
      correctAnswer = randomNumber1 * randomNumber2;
      break;
    default:
      correctAnswer = '?';
  }
  const question = `Question: ${randomNumber1} ${randomOperator} ${randomNumber2}`;
  console.log(question);
  const answer = readlineSync.question('Your answer: ');
  if (parseInt(answer, 10) === correctAnswer) {
    console.log('Correct!');
    if (i === 2) {
      console.log(congrats);
      break;
    }
    i += 1;
  } else if (answer !== correctAnswer) {
    const wrongAnswer = `'${answer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.\nLet's try again, ${user}!`;
    console.log(wrongAnswer);
    break;
  }
}
