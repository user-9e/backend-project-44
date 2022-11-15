import readlineSync from 'readline-sync';
import {
  user, greeting, congrats, gcd, randomInteger, isPrime,
} from '../index.js';

console.log(`${greeting}\nAnswer "yes" if given number is prime. Otherwise answer "no".`);

for (let i = 0; i < 3;) {
  const randomNumber = randomInteger(100);
  const correctAnswer = isPrime(randomNumber) ? 'yes' : 'no';
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
