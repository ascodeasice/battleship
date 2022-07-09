import Player from '../modules/Player';

const len = 10;
let player = Player('testing', len);
let computer = Player('Computer', len);

beforeEach(() => {
  player = Player('testing', len);
  computer = Player('Computer', len);
});

describe('Constructor', () => {
  it('name', () => {
    expect(player.name).toBe('testing');
  });
});

describe('attack', () => {
  it('Valid attack', () => {
    player.attack(computer.board, 0, 0);
    expect(computer.board.isHit(0, 0)).toBe(true);
  });

  it('Attack same block', () => {
    player.attack(computer.board, 0, 0);
    expect(() => player.attack(computer.board, 0, 0)).toThrow();
  });

  it('Out of index', () => {
    expect(() => player.attack(computer.board, -1, -1)).toThrow();
  });
});

describe('randomAttack', () => {
  it('Valid', () => {
    computer.randomAttack(player.board);
  });

  it('Nothing to attck', () => {
    for (let i = 0; i < len * len; i += 1) {
      computer.randomAttack(player.board);
    }
    expect(() => computer.randomAttack(player.board)).toThrow();
  });
  // prevent attack the same block
});
