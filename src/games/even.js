import readlineSync from 'readline-sync';
import {
  user, greeting, congrats, randomInteger, response,
} from '../index.js';

console.log(`${greeting}\nAnswer "yes" if the number is even, otherwise answer "no"`);

for (let i = 0; i < 3; i += 1) {
  const randomNumber = randomInteger(100);
  const correctAnswer = (randomNumber % 2 === 0) ? 'yes' : 'no';
  const answer = readlineSync.question(`Question: ${randomNumber}\nYour answer: `);
  response(answer, correctAnswer);
  if (i === 2) {
    console.log(congrats);
    break;
  }
  if (answer !== correctAnswer) {
    break;
  }
}
