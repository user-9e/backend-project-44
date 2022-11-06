import readlineSync from 'readline-sync';

console.log('Welcome to the Brain Games!');
export const user = readlineSync.question('May I have your name? ');
export const greeting = `Hello, ${user}!`;
console.log(greeting);

console.log('Answer "yes" if the number is even, otherwise answer "no"');

for (let i = 0; i < 3;) {
  const randomNumber = Math.floor(Math.random() * 100);
  const correctAnswer = (parseInt(randomNumber, 10) % 2 === 0) ? 'yes' : 'no';
  const answer = readlineSync.question(`Question: ${randomNumber}\nYour answer: `);
  if (answer === correctAnswer) {
    console.log('Correct!');
    if (i === 2) {
      console.log(`Congratulations, ${user}!`);
      break;
    }
    i += 1;
  } else if (answer !== correctAnswer) {
    console.log(`'${answer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.\nLet's try again, ${user}!`);
    break;
  }
}
