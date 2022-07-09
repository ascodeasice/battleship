import Gameboard from './Gameboard';

function randomInt(min, max) {
  return Math.floor(Math.random() * (max - min) + min);
  // The maximum is exclusive and the minimum is inclusive
}

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
    // let i = -1;
    // let j = -1;
    const validCoords = [];
    for (let i = 0; i < enemyBoard.size; i += 1) {
      for (let j = 0; j < enemyBoard.size; j += 1) {
        if (!enemyBoard.isHit(i, j)) {
          validCoords.push([i, j]);
        }
      }
    }

    if (validCoords.length === 0) {
      throw new Error('No blocks to attack');
    }

    const coords = validCoords[randomInt(0, validCoords.length)];

    enemyBoard.receiveAttack(coords[0], coords[1]);

    // prevent duplication
  };

  return {
    name,
    board,
    attack,
    randomAttack,
  };
};

export default Player;
