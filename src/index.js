import evengame from './games/evengame';
import calcgame from './games/calcgame';

const allGames = () => { };

const game = (name) => {
  console.log('Welcome to the Brain Games!');
  switch (name) {
    case 'all':
      allGames();
      break;
    case 'even':
      evengame();
      break;
    case 'calc':
      calcgame();
      break;
    default:
      console.log(`Unknow game: ${name}`);
      break;
  }
};

export default game;
