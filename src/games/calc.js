import randomNum from '../utils';
import engine from '../engine';

const getQuestionAndAnswer = () => {
  let question;
  let rightAnswer;
  const num1 = randomNum(0, 100);
  const num2 = randomNum(0, 100);
  const statementOfQuestion = ['+', '-', '*'][randomNum(0, 2)];
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
      question = 'Error: unknow statement';
      rightAnswer = 0;
  }
  return [question, String(rightAnswer)];
};

export default () => {
  engine('What is the result of the expression?', getQuestionAndAnswer);
};
