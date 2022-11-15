import readlineSync from 'readline-sync';
import {
  user, greeting, congrats, hideIndex, progression, randomInteger,
} from '../index.js';

console.log(`${greeting}\nWhat number is mising in this progression?`);

for (let i = 0; i < 3;) {
  const progressionStep = randomInteger(10);
  const progressionForAnswer = progression(progressionStep);
  const randomIndex = randomInteger(10);
  const correctAnswer = progressionForAnswer[randomIndex];
  const progressionForQuestion = progressionForAnswer;
  hideIndex(progressionForQuestion, randomIndex);
  const answer = readlineSync.question(`Question: ${progressionForQuestion}\nYour answer: `);
  if (+answer === correctAnswer) {
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
