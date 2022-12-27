import readlineSync from 'readline-sync';
import {
  user, greeting, congrats, randomInteger, responseYN,
} from '../index.js';

console.log(greeting);
console.log('Answer "yes" if given number is prime. Otherwise answer "no".');

function isPrime(int) {
  if (int % 2 === 0 || int === 1) {
    return false;
  }
  for (let i = 3; i <= Math.floor(Math.sqrt(int)); i += 1) {
    if (int % i === 0) {
      return false;
    }
  } return true;
}

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
