import Ship from './Ship';
import { randomInt } from './functions';

const Gameboard = (size) => {
  const isHitData = [];
  // create 2D array
  for (let i = 0; i < size; i += 1) {
    const row = [];
    for (let j = 0; j < size; j += 1) {
      row.push(false);
    }
    isHitData.push(row);
  }

  const shipData = []; // ship data on map
  for (let i = 0; i < size; i += 1) {
    const row = [];
    for (let j = 0; j < size; j += 1) {
      row.push({
        // index of ship in shipData
        shipIndex: -1,
        // position of ship
        shipPos: -1,
        direction: 'none',
      });
    }
    shipData.push(row);
  }

  const shipArr = [];// array of objects of Ship

  const isHit = (row, col) => {
    if (row < 0 || row > size || col < 0 || col > size) {
      throw new Error('Out of index');
    }
    return isHitData[row][col];
  };

  const hasShip = (row, col) => {
    if (row < 0 || row >= size || col < 0 || col >= size) {
      return true;// Out of index
    }
    return shipData[row][col].shipIndex !== -1;
  };

  // row+len, col
  const placeShipVertically = (len, row, col) => {
    if (len <= 0) {
      throw new Error('Can\' t place ship, invalid ship length');
    }

    for (let i = 0; i < len; i += 1) {
      if (hasShip(row + i, col) || row + i >= size) {
        return false;
      }
    }

    // all of needed blocks are available
    for (let i = 0; i < len; i += 1) {
      shipData[row + i][col].shipIndex = shipArr.length;// new ship
      shipData[row + i][col].shipPos = i;
      shipData[row + i][col].direction = 'vertical';
    }

    shipArr.push(Ship(len));
    return true;
  };

  // row, col+len
  const placeShipHorizontally = (len, row, col) => {
    if (len <= 0) {
      throw new Error('Can\' t place ship, invalid ship length');
    }

    for (let i = 0; i < len; i += 1) {
      if (hasShip(row, col + i) || col + i >= size) {
        return false;
      }
    }

    // all of needed blocks are available
    for (let i = 0; i < len; i += 1) {
      shipData[row][col + i].shipIndex = shipArr.length;// new ship
      shipData[row][col + i].shipPos = i;
      shipData[row][col + i].direction = 'horizontal';
    }

    shipArr.push(Ship(len));
    return true;
  };

  const receiveAttack = (row, col) => {
    isHitData[row][col] = true;
    if (shipData[row][col].shipIndex === -1) {
      return;
    }
    // if a ship is hit, call ship.hit()
    const data = shipData[row][col];
    shipArr[data.shipIndex].hit(data.shipPos);
  };

  const placeShipsRandomly = () => {
    const shipLengths = [5, 4, 3, 3, 2];
    shipLengths.forEach((len) => {
      while (true) {
        const howToPlace = randomInt(0, 2);
        const coords = [randomInt(0, size), randomInt(0, size)];

        if (howToPlace === 0) {
          if (placeShipHorizontally(len, coords[0], coords[1])) {
            break;
          }
        } else if (placeShipVertically(len, coords[0], coords[1])) {
          break;
        }
      }
    });
  };

  const removeShip = (row, col) => {
    if (row < 0 || row >= size || col < 0 || col >= size) {
      throw new Error('Out of index(removeShip)');
    }

    if (shipData[row][col].shipIndex === -1) {
      return;
    }

    const data = shipData[row][col];
    const ship = shipArr[data.shipIndex];
    const len = ship.length;
    const pos = data.shipPos;
    if (data.direction === 'vertical') {
      const startRow = row - pos; // starts from row-pos
      for (let i = 0; i < len; i++) {
        shipData[startRow + i][col] = {
          shipIndex: -1,
          shipPos: -1,
          direction: 'none',
        };
      }
    } else {
      const startCol = col - pos;
      for (let i = 0; i < len; i++) {
        shipData[row][startCol + i] = {
          shipIndex: -1,
          shipPos: -1,
          direction: 'none',
        };
      }
    }
  };

  const outOfIndex = (i, j) => i < 0 || i >= size || j < 0 || j >= size;

  return {
    size,
    shipData,
    isHitData,
    shipArr,
    hasShip,
    receiveAttack,
    isHit,
    placeShipVertically,
    placeShipHorizontally,
    placeShipsRandomly,
    removeShip,
    outOfIndex,
  };
};

export default Gameboard;
