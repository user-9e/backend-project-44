import readlineSync from 'readline-sync';
import {
  user, greeting, congrats, randomInteger,
} from '../index.js';

console.log(`${greeting}\nAnswer "yes" if the number is even, otherwise answer "no"`);

for (let i = 0; i < 3;) {
  const randomNumber = randomInteger(100);
  const correctAnswer = (randomNumber % 2 === 0) ? 'yes' : 'no';
  const answer = readlineSync.question(`Question: ${randomNumber}\nYour answer: `);
  if (answer === correctAnswer) {
    console.log('Correct!');
    if (i === 2) {
      console.log(congrats);
      break;
    }
    i += 1;
  } else if (answer !== correctAnswer) {
    console.log(`'${answer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.\nLet's try again, ${user}!`);
    break;
  }
}
