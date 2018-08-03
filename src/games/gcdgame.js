import * as utils from '../utils';
import engine from '../engine';

const nod = (x, y) => {
  if (y === 0) {
    return x;
  }
  return nod(y, x % y);
};

const game = () => {
  const getQuestionAndAnswer = () => {
    const num1 = utils.randomNum(1, 30);
    const num2 = utils.randomNum(1, 100);

    const question = `${num1} ${num2}`;
    const rightAnswer = nod(num1, num2);

    return [question, String(rightAnswer)];
  };
  engine('Find the greatest common divisor of given numbers.', getQuestionAndAnswer);
};
export default game;
