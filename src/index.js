import readlineSync from 'readline-sync';

export const user = readlineSync.question('Welcome to the Brain Games!\nMay I have your name? ');
export const greeting = `Hello, ${user}!`;
export const congrats = `Congratulations, ${user}!`;
export const operators = ['-', '+', '*'];
