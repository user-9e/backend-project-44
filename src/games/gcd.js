import readlineSync from 'readline-sync';
import { user, greeting, congrats, gcd } from '../index.js';

console.log(`${greeting}\nFind the greatest common divisor of given numbers.`);

for (let i = 0; i < 3;) {
  const randomNumber1 = parseInt((Math.floor(Math.random() * 40)), 10);
  const randomNumber2 = parseInt((Math.floor(Math.random() * 40)), 10);
  const answer = readlineSync.question(`Question: ${randomNumber1} ${randomNumber2}\nYour answer: `);
  const correctAnswer = gcd(randomNumber1, randomNumber2);
  if (+answer === correctAnswer) {
    console.log('Correct!');
    if (i === 2) {
      console.log(congrats);
      break;
    }
    i += 1;
  } else if (+answer !== correctAnswer) {
    console.log(`'${answer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.\nLet's try again, ${user}!`);
    break;
  }
}
