import randomNum from '../utils';
import engine from '../engine';

const game = () => {
  const getQuestionAndAnswer = () => {
    let question;
    let rightAnswer;
    const num1 = randomNum(0, 100);
    const num2 = randomNum(0, 100);
    const statementOfQuestion = ['+', '-', '*'](randomNum(0, 2));
    switch (statementOfQuestion) {
      case '+':
        question = `${num1} + ${num2}`;
        rightAnswer = num1 + num2;
        break;
      case '-':
        question = `${num1} - ${num2}`;
        rightAnswer = num1 - num2;
        break;
      case '*':
        question = `${num1} * ${num2}`;
        rightAnswer = num1 * num2;
        break;
      default:
        question = 'Unknow statement';
        rightAnswer = 'Error';
    }
    return [question, String(rightAnswer)];
  };
  engine('What is the result of the expression?', getQuestionAndAnswer);
};
export default game;
