import readlineSync from 'readline-sync';
import evengame from './games/evengame';

const sayHello = () => {
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}\n`);
  return name;
};

export const gameeven = () => {
  console.log('Welcome to the Brain Games!');
  console.log('Answer "yes" if number even otherwise answer "no".\n');

  const name = sayHello();
  evengame(name);
};

export default sayHello;
