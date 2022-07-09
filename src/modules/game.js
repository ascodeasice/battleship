import Player from './Player';
import randomInt from './functions';

const placeShipRandomly = (board) => {
  const shipLengths = [5, 4, 3, 3, 2];
  shipLengths.forEach((len) => {
    while (true) {
      const howToPlace = randomInt(0, 2);
      const coords = [randomInt(0, board.size), randomInt(0, board.size)];

      if (howToPlace === 0) {
        if (board.placeShipHorizontally(len, coords[0], coords[1])) {
          break;
        }
      } else if (board.placeShipVertically(len, coords[0], coords[1])) {
        break;
      }
    }
  });
};

const gameLoop = () => {
  const player = Player('Testing', 10);
  const computer = Player('Computer', 10);
  // TODO Player place ships
  placeShipRandomly(player.board);
  placeShipRandomly(computer.board);
  while (!player.lost() && !computer.lost()) {
    player.randomAttack(computer.board);
    computer.randomAttack(player.board);
  }
};

export { placeShipRandomly, gameLoop };
