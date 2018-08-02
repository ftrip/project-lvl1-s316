import * as utils from '../utils';
import base from './base';

const game = () => {
  const getQuestionAndAnswer = () => {
    const question = utils.randomNum(0, 100);
    const rightAnswer = utils.isEven(question) ? 'yes' : 'no';
    return [question, rightAnswer];
  };
  base('Answer "yes" if number even otherwise answer "no".', getQuestionAndAnswer, 3);
};
export default game;
