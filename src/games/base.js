import readlineSync from 'readline-sync';

export const sayHello = () => {
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}\n`);
  return name;
};

const baseGame = (description, getQuestionAndAnswer, attempts) => {
  console.log(`${description}\n`);
  const name = sayHello();

  for (let i = 0; i < attempts; i += 1) {
    const [question, rightAnswer] = getQuestionAndAnswer();
    console.log(`Question: ${question}`);
    const answer = readlineSync.question('Your answer: ');
    if (answer === rightAnswer) {
      console.log('Correct!');
    } else {
      console.log(`'${answer}' is wrong answer ;(. Correct answer was '${rightAnswer}'.`);
      console.log(`Let's try again, ${name}!`);
      return;
    }
  }
  console.log(`Congratulations, ${name}`);
};

export default baseGame;
