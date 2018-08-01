import readlineSync from 'readline-sync';

const isEven = num => num % 2 === 0;
const randomNum = () => Math.floor(Math.random() * (101));

const game = (name) => {
  for (let i = 0; i < 3; i += 1) {
    const rand = randomNum();
    console.log(`Question: ${rand}`);
    const answer = readlineSync.question('Your answer: ');
    const rightAnswer = isEven(rand) ? 'yes' : 'no';
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
