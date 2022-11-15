import readlineSync from 'readline-sync';

export const user = readlineSync.question('Welcome to the Brain Games!\nMay I have your name? ');
export const greeting = `Hello, ${user}!`;
export const congrats = `Congratulations, ${user}!`;
export const operators = ['-', '+', '*'];
export const randomInteger = (int) => parseInt((Math.floor(Math.random() * int)), 10) + 1;

export const gcd = (a, b) => {
  if (b === 0) {
    return a;
  }
  return gcd(b, (a % b));
};

export function hideIndex(coll, index) {
  // eslint-disable-next-line no-param-reassign
  coll[index] = '..';
  return coll;
}

export function progression(int) {
  const result = [2];
  for (let i = 0; result.length < 10; i += 1) {
    result.push(result[i] + int);
  }
  return hideIndex(result);
}

export function isPrime(int) {
  if (int % 2 === 0 || int === 1) {
    return false;
  }
  for (let i = 3; i <= Math.floor(Math.sqrt(int)); i += 1) {
    if (int % i === 0) {
      return false;
    }
  } return true;
}
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
