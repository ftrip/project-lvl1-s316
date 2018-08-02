import readlineSync from 'readline-sync';

const isEven = num => num % 2 === 0;
const randomNum = (min, max) => min + Math.floor(Math.random() * (max - min + 1));

const game = (name) => {
  const attempts = 3;
  for (let i = 0; i < attempts; i += 1) {
    const question = randomNum(0, 100);
    console.log(`Question: ${question}`);
    const answer = readlineSync.question('Your answer: ');
    const rightAnswer = isEven(question) ? 'yes' : 'no';
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
export default game;
