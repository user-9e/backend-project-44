import readlineSync from 'readline-sync';
import {
  user, greeting, congrats, gcd, randomInteger, response,
} from '../index.js';

console.log(`${greeting}\nFind the greatest common divisor of given numbers.`);

for (let i = 0; i < 3; i += 1) {
  const randomNumber1 = randomInteger(40);
  const randomNumber2 = randomInteger(40);
  const answer = readlineSync.question(`Question: ${randomNumber1} ${randomNumber2}\nYour answer: `);
  const correctAnswer = gcd(randomNumber1, randomNumber2);
  response(answer, correctAnswer);

  if (+answer !== correctAnswer) {
    console.log(`Let's try again, ${user}!`);
    break;
  }
  if (i === 2) {
    console.log(congrats);
    break;
  }
}
