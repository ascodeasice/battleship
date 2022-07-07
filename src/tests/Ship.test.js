import Ship from '../modules/Ship';

describe('Ship()', () => {
  it('Ship constructor(length)', () => {
    const obj = Ship(5);
    expect(obj.length).toBe(5);
  });
});

describe('hit()', () => {
  it('hit() out of index', () => {
    const obj = Ship(3);
    expect(() => obj.hit(3)).toThrow();
  });

  it('valid hit()', () => {
    const obj = Ship(3);
    obj.hit(2);
    expect(obj.isHit(2)).toBe(true);
  });
});

describe('isHit()', () => {
  it('invalid isHit()', () => {
    const obj = Ship(4);
    expect(() => obj.isHit(4)).toThrow();
  });

  it('valid isHit()', () => {
    const obj = Ship(4);
    expect(obj.isHit(0)).toBe(false);
  });
});

describe('isSunk()', () => {
  it('default isSunk()', () => {
    const obj = Ship(4);
    expect(obj.isSunk()).toBe(false);
  });

  it('sunk ship', () => {
    const len = 3;
    const obj = Ship(len);
    for (let i = 0; i < len; i += 1) {
      obj.hit(i);
    }
    expect(obj.isSunk()).toBe(true);
  });
});
