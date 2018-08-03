import randomNum from '../utils';
import engine from '../engine';

const maxNums = 10;

const getQuestionAndAnswer = () => {
  const startNum = randomNum(0, 10);
  const step = randomNum(1, 10);
  const maxNum = startNum + step * (maxNums - 1);
  const hideIndex = randomNum(0, 9);
  const progressionNums = [];
  for (let i = startNum; i <= maxNum; i += step) {
    progressionNums.push(i);
  }
  const reducer = (buildQuestion, value, index) => `${buildQuestion} ${index === hideIndex ? '..' : value}`;
  const question = progressionNums.reduce(reducer, '');
  const rightAnswer = progressionNums[hideIndex];
  return [question, String(rightAnswer)];
};

export default () => {
  engine('What number is missing in this progression?', getQuestionAndAnswer);
};
