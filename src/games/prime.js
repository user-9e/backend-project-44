import readlineSync from 'readline-sync';
import {
  user, greeting, congrats, randomInteger, isPrime, responseYN,
} from '../index.js';

console.log(greeting);
console.log('Answer "yes" if given number is prime. Otherwise answer "no".');

for (let i = 0; i < 3; i += 1) {
  const randomNumber = randomInteger(100);
  const correctAnswer = isPrime(randomNumber) ? 'yes' : 'no';
  const answer = readlineSync.question(`Question: ${randomNumber}\nYour answer: `);
  responseYN(answer, correctAnswer);

  if (answer !== correctAnswer) {
    console.log(`Let's try again, ${user}!`);
    break;
  }
  if (i === 2) {
    console.log(congrats);
    break;
  }
}
