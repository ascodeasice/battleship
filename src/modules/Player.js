import Gameboard from './Gameboard';
import { randomInt } from './functions';

const Player = (name, size) => {
  const board = Gameboard(size);

  // NOTE maybe return whether the attack is valid
  const attack = (enemyBoard, i, j) => {
    if (i < 0 || i >= enemyBoard.size || j < 0 || j >= enemyBoard.size) {
      throw new Error('Out of index');
    }
    if (enemyBoard.isHit(i, j)) {
      throw new Error('Already attacked');
    }
    enemyBoard.receiveAttack(i, j);
  };

  // NOTE move for computer, maybe player can also use it?
  const randomAttack = (enemyBoard) => {
    // prevent duplication
    const validCoords = [];
    for (let i = 0; i < enemyBoard.size; i += 1) {
      for (let j = 0; j < enemyBoard.size; j += 1) {
        if (!enemyBoard.isHit(i, j)) {
          validCoords.push([i, j]);
        }
      }
    }

    // nothing to attacawait new Promise(r => setTimeout(r, 2000));//TODO remove thisk
    if (validCoords.length === 0) {
      throw new Error('No blocks to attack');
    }

    const coords = validCoords[randomInt(0, validCoords.length)];
    enemyBoard.receiveAttack(coords[0], coords[1]);
  };

  const lost = () => {
    if (board.shipArr.length === 0) {
      throw new Error('No ship in shipArr');
    }

    // every ship is sunk
    for (let i = 0; i < board.size; i++) {
      for (let j = 0; j < board.size; j++) {
        if (board.shipData[i][j].shipIndex !== -1) {
          if (!board.shipArr[board.shipData[i][j].shipIndex].isSunk()) {
            return false;
          }
        }
      }
    }
    return true;
  };

  // if there are surrounding ships been hit, try hit around
  const AIAttack = (enemyBoard) => {
    const directions = [[0, 1], [0, -1], [1, 0], [-1, 0]];
    for (let i = 0; i < enemyBoard.size; i++) {
      for (let j = 0; j < enemyBoard.size; j++) {
        if (enemyBoard.isHit(i, j) && enemyBoard.hasShip(i, j)) {
          for (const direct of directions) {
            const coord = [i + direct[0], j + direct[1]];
            if (enemyBoard.outOfIndex(coord[0], coord[1])
              || enemyBoard.isHit(coord[0], coord[1])) {
              continue;
            } else {
              attack(enemyBoard, coord[0], coord[1]);
              return;
            }
          }
        }
      }
    }
    randomAttack(enemyBoard);
  };

  return {
    name,
    board,
    attack,
    randomAttack,
    lost,
    AIAttack,
  };
};

export default Player;
