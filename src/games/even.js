import randomNum from '../utils';
import engine from '../engine';

export const isEven = num => num % 2 === 0;

const game = () => {
  const getQuestionAndAnswer = () => {
    const question = randomNum(0, 100);
    const rightAnswer = isEven(question) ? 'yes' : 'no';
    return [question, rightAnswer];
  };
  engine('Answer "yes" if number even otherwise answer "no".', getQuestionAndAnswer);
};
export default game;
