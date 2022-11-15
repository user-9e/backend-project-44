import readlineSync from 'readline-sync';
import {
  user, greeting, congrats, gcd, randomInteger, isPrime, response,
} from '../index.js';

console.log(`${greeting}\nAnswer "yes" if given number is prime. Otherwise answer "no".`);

for (let i = 0; i < 3; i += 1) {
  const randomNumber = randomInteger(100);
  const correctAnswer = isPrime(randomNumber) ? 'yes' : 'no';
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
