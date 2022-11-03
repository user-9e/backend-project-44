import readlineSync from 'readline-sync';

export const user = readlineSync.question('May I have your name? ');
export const greeting = `Hello, ${user}!`;
