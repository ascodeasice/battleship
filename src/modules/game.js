import Player from './Player';
import { randomInt } from './functions';
import { renderBoard, clearPage, showWinner } from './DOM';

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
  const player = Player('Player', 10);
  const computer = Player('Computer', 10);

  // TODO Let Player place ships
  placeShipRandomly(player.board);
  placeShipRandomly(computer.board);
  renderBoard(player);
  renderBoard(computer);

  while (!player.lost() && !computer.lost()) {
    player.randomAttack(computer.board);// TODO wait for player move
    computer.randomAttack(player.board);
    clearPage();
    renderBoard(player); // NOTE must re-render every time computer moves
    renderBoard(computer);
  }

  if (player.lost()) {
    showWinner(computer);
  } else {
    showWinner(player);
  }
};

export { placeShipRandomly, gameLoop };
