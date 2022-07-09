import Gameboard from '../modules/Gameboard';

let board = Gameboard(5);
const len = 5;

beforeEach(() => {
  // reset variables
  board = Gameboard(len);
});

describe('Gameboard', () => {
  it('Gameboard constructor', () => {
    expect(board.size).toBe(len);

    for (let i = 0; i < len; i += 1) {
      for (let j = 0; j < len; j += 1) {
        expect(board.isHitData[i][j]).toBe(false);
      }
    }

    for (let i = 0; i < len; i += 1) {
      for (let j = 0; j < len; j += 1) {
        expect(board.shipData[i][j]).toEqual({
          shipIndex: -1,
          shipPos: -1,
        });
      }
    }

    expect(board.shipArr).toEqual([]);
  });
});

describe('placeShipVertically', () => {
  it('Valid', () => {
    board.placeShipVertically(3, 0, 0);
    for (let i = 0; i < 3; i += 1) {
      expect(board.shipData[i][0]).toEqual({
        shipIndex: 0,
        shipPos: i,
      });
    }
  });

  it('Invalid length', () => {
    expect(() => board.placeShipVertically(0, 0, 0)).toThrow();
  });

  it('Already has ship', () => {
    board.placeShipVertically(3, 0, 0);
    expect(() => board.placeShipVertically(1, 1, 0)).toThrow();
  });

  it('Out of board', () => {
    expect(() => board.placeShipVertically(3, 3, 0)).toThrow();
  });
});

describe('placeShipHorizontally', () => {
  it('Valid', () => {
    board.placeShipHorizontally(3, 0, 0);
    for (let i = 0; i < 3; i += 1) {
      expect(board.shipData[0][i]).toEqual({
        shipIndex: 0,
        shipPos: i,
      });
    }
  });

  it('Invalid length', () => {
    expect(() => board.placeShipHorizontally(0, 0, 0)).toThrow();
  });

  it('Already has ship', () => {
    board.placeShipHorizontally(3, 0, 0);
    expect(() => board.placeShipHorizontally(1, 0, 2)).toThrow();
  });

  it('Out of board', () => {
    expect(() => board.placeShipHorizontally(3, 0, 3)).toThrow();
  });
});

describe('receiveAttack', () => {
  it('Valid coord', () => {
    for (let i = 0; i < len; i += 1) {
      for (let j = 0; j < len; j += 1) {
        board.receiveAttack(i, j);
        expect(board.isHit(i, j)).toBe(true);
      }
    }
  });

  it('Hitting ship', () => {
    board.placeShipHorizontally(1, 0, 0);
    board.receiveAttack(0, 0);
    const data = board.shipData[0][0];
    expect(board.shipArr[data.shipIndex].isHit(data.shipPos)).toBe(true);
  });

  it('Invalid coord', () => {
    expect(() => board.receiveAttack(-1, 1)).toThrow();
  });
});

describe('isHit', () => {
  it('valid', () => {
    for (let i = 0; i < len; i += 1) {
      for (let j = 0; j < len; j += 1) {
        expect(board.isHitData[i][j]).toEqual(board.isHit(i, j));
      }
    }
  });

  it('Invalid', () => {
    expect(() => board.isHit(-1, 0)).toThrow();
  });
});
