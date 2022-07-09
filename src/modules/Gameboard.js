import Ship from './Ship';

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
    if (row < 0 || row > size || col < 0 || col > size) {
      throw new Error('Out of index');
    }
    return shipData[row][col].shipIndex !== -1;
  };

  // row+len, col
  const placeShipVertically = (len, row, col) => {
    if (len <= 0) {
      throw new Error('Can\' t place ship, invalid ship length');
    }

    // all of needed blocks are available
    for (let i = 0; i < len; i += 1) {
      if (hasShip(row + i, col) || row + i >= size) {
        throw new Error('Can\' t place ship');
      }
    }

    for (let i = 0; i < len; i += 1) {
      shipData[row + i][col].shipIndex = shipArr.length;// new ship
      shipData[row + i][col].shipPos = i;
    }

    shipArr.push(Ship(len));
  };

  // row, col+len
  const placeShipHorizontally = (len, row, col) => {
    if (len <= 0) {
      throw new Error('Can\' t place ship, invalid ship length');
    }

    // all of needed blocks are available
    for (let i = 0; i < len; i += 1) {
      if (hasShip(row + i, col) || row + i >= size) {
        throw new Error('Can\' t place ship');
      }
    }

    for (let i = 0; i < len; i += 1) {
      shipData[row][col + i].shipIndex = shipArr.length;// new ship
      shipData[row][col + i].shipPos = i;
    }

    shipArr.push(Ship(len));
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

  return {
    shipData,
    isHitData,
    shipArr,
    receiveAttack,
    isHit,
    placeShipVertically,
    placeShipHorizontally,
  };
};

export default Gameboard;
