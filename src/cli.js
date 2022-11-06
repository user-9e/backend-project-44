import readlineSync from 'readline-sync';

console.log('Welcome to the Brain Games!');
export const user = readlineSync.question('May I have your name? ');
export const greeting = `Hello, ${user}!`;
