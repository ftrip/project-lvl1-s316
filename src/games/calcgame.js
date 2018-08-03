import * as utils from '../utils';
import base from '../engine';

const game = () => {
  const getQuestionAndAnswer = () => {
    let question = null;
    let rightAnswer = null;
    const num1 = utils.randomNum(0, 100);
    const num2 = utils.randomNum(0, 100);
    const statement = utils.randomNum(0, 2);
    switch (statement) {
      case 0:
        question = `${num1} + ${num2}`;
        rightAnswer = num1 + num2;
        break;
      case 1:
        question = `${num1} - ${num2}`;
        rightAnswer = num1 - num2;
        break;
      case 2:
        question = `${num1} * ${num2}`;
        rightAnswer = num1 * num2;
        break;
      default:
        console.log('Error: Unknow statement');
    }
    return [question, String(rightAnswer)];
  };
  base('What is the result of the expression?', getQuestionAndAnswer);
};
export default game;
