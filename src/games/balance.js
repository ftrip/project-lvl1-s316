import randomNum from '../utils';
import engine from '../engine';

const balanseNumsArray = (nums) => {
  if (nums[nums.length - 1] - nums[0] <= 1) {
    return nums;
  }
  const newNums = nums.slice();
  newNums[0] += 1;
  newNums[newNums.length - 1] -= 1;
  return balanseNumsArray(newNums.sort());
};

const getQuestionAndAnswer = () => {
  const num = randomNum(100, 9999);

  const question = num;
  const numsQuestion = String(num).split('').map(char => Number(char)).sort();
  const rightAnswer = balanseNumsArray(numsQuestion).join('');

  return [question, String(rightAnswer)];
};

const game = () => {
  engine('Balance the given number.', getQuestionAndAnswer);
};
export default game;
