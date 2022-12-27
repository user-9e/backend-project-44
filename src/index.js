import readlineSync from 'readline-sync';

export const user = readlineSync.question('Welcome to the Brain Games!\nMay I have your name? ');
export const greeting = `Hello, ${user}!`;
export const congrats = `Congratulations, ${user}!`;
export const operators = ['-', '+', '*'];
export const randomInteger = (int) => parseInt((Math.floor(Math.random() * int)), 10) + 1;

export function response(userAnswer, realAnswer) {
  if (+userAnswer === realAnswer) {
    console.log('Correct!');
  } else console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${realAnswer}'.`);
}

export function responseYN(userAnswer, realAnswer) {
  if (userAnswer === realAnswer) {
    console.log('Correct!');
  } else console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${realAnswer}'.`);
}
