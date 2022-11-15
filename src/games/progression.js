import readlineSync from 'readline-sync';
import {
  user, greeting, congrats, hideIndex, progression, randomInteger, response,
} from '../index.js';

console.log(greeting);
console.log('What number is mising in the progression?');

for (let i = 0; i < 3; i += 1) {
  const progressionStep = randomInteger(10);
  const progressionForAnswer = progression(progressionStep);
  const randomIndex = randomInteger(10);
  const correctAnswer = progressionForAnswer[randomIndex];
  let progressionForQuestion = progressionForAnswer;
  progressionForQuestion = hideIndex(progressionForQuestion, randomIndex);
  const answer = readlineSync.question(`Question: ${progressionForQuestion.join(' ')}\nYour answer: `);
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
