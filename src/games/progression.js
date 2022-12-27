import readlineSync from 'readline-sync';
import {
  user, greeting, congrats, randomInteger, response,
} from '../index.js';

console.log(greeting);
console.log('What number is missing in the progression?');

function hideIndex(coll, index) {
  // eslint-disable-next-line no-param-reassign
  coll[index] = '..';
  return coll;
}

function progression(int) {
  const result = [2];
  for (let i = 0; result.length < 10; i += 1) {
    result.push(result[i] + int);
  }
  return result;
}

for (let i = 0; i < 3; i += 1) {
  const progressionStep = randomInteger(10);
  const progressionForAnswer = progression(progressionStep);
  const randomIndex = randomInteger(9);
  const correctAnswer = progressionForAnswer[randomIndex];
  let progressionForQuestion = progressionForAnswer;
  progressionForQuestion = hideIndex(progressionForQuestion, randomIndex);
  console.log(`Question: ${progressionForQuestion.join(' ')}`);
  const answer = readlineSync.question('Your answer: ');
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
