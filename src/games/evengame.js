import * as utils from '../utils';
import engine from '../engine';

const game = () => {
  const getQuestionAndAnswer = () => {
    const question = utils.randomNum(0, 100);
    const rightAnswer = utils.isEven(question) ? 'yes' : 'no';
    return [question, rightAnswer];
  };
  engine('Answer "yes" if number even otherwise answer "no".', getQuestionAndAnswer);
};
export default game;
