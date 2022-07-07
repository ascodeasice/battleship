const Ship = (len) => {
  const length = len;
  const whereIsHit = []; // position(index) of the ship is hit
  for (let i = 0; i < length; i += 1) {
    whereIsHit.push(false);
  }

  const hit = (index) => {
    if (index >= length || index < 0) {
      throw new Error('Out of index(hit function in Ship)');
    } else {
      whereIsHit[index] = true;
    }
  };

  const isHit = (index) => {
    if (index >= length || index < 0) {
      throw new Error('Out of index(isHit function in Ship)');
    } else {
      return whereIsHit[index];
    }
  };

  const isSunk = () => whereIsHit.every((val) => val === true);

  return {
    length, hit, isSunk, isHit,
  };
};

export default Ship;
