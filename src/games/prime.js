import randomNum from '../utils';
import engine from '../engine';

const isPrime = (num) => {
  if (num < 2) {
    return false;
  }
  if (num <= 3) {
    return true;
  }
  if (num % 2 === 0) {
    return false;
  }
  for (let i = 3; i < num / 2; i += 2) {
    if (num % i === 0) {
      return false;
    }
  }
  return true;
};

const getQuestionAndAnswer = () => {
  const question = randomNum(0, 100);
  const rightAnswer = isPrime(question) ? 'yes' : 'no';
  return [question, rightAnswer];
};

export default () => {
  engine('Is this number prime?', getQuestionAndAnswer);
};
