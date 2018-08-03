import randomNum from '../utils';
import engine from '../engine';

const balance = (num) => {
  const numsQuestion = String(num).split('').map(char => Number(char)).sort();
  while (numsQuestion[numsQuestion.length - 1] - numsQuestion[0] > 1) {
    numsQuestion[0] += 1;
    numsQuestion[numsQuestion.length - 1] -= 1;
    numsQuestion.sort();
  }
  return numsQuestion.join('');
};

const getQuestionAndAnswer = () => {
  const num = randomNum(100, 9999);
  const question = num;
  const rightAnswer = balance(num);

  return [question, rightAnswer];
};

export default () => {
  engine('Balance the given number.', getQuestionAndAnswer);
};
