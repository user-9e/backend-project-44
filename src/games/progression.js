import readlineSync from 'readline-sync';
import {
  user, greeting, congrats, hideIndex, progression, randomInteger, response,
} from '../index.js';

console.log(`${greeting}\nWhat number is mising in this progression?`);

for (let i = 0; i < 3; i += 1) {
  const progressionStep = randomInteger(10);
  const progressionForAnswer = progression(progressionStep);
  const randomIndex = randomInteger(10);
  const correctAnswer = progressionForAnswer[randomIndex];
  const progressionForQuestion = progressionForAnswer;
  hideIndex(progressionForQuestion, randomIndex);
  const answer = readlineSync.question(`Question: ${progressionForQuestion}\nYour answer: `);
  response(answer, correctAnswer);
  if (i === 2) {
    console.log(congrats);
    break;
  }
  if (answer !== correctAnswer) {
    console.log(`Let's try again, ${user}!`);
    break;
  }
}
