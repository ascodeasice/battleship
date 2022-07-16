import './style.css';
import {
  renderComputerBoard,
  renderPlayerBoard,
  showInfo,
  clearContainer,
} from './modules/DOM';
import Player from './modules/Player';

const startBtn = document.getElementById('startBtn');
const newGameBtn = document.getElementById('newGameBtn');

let player = Player('You', 10);
let computer = Player('Computer', 10);

function startNewGame() {
  clearContainer();
  player = Player('You', 10);
  computer = Player('Computer', 10);
  player.board.placeShipsRandomly(player.board);
  computer.board.placeShipsRandomly(computer.board);

  showInfo('Place your ship by drag and drop.\n click to change direction');
  renderPlayerBoard(player);
  newGameBtn.style.display = 'none';
}

startBtn.addEventListener('click', () => {
  renderComputerBoard(player, computer);
  startBtn.style.display = 'none';
  showInfo('Attack the enemy\'s board');
});

newGameBtn.addEventListener('click', startNewGame);

startNewGame();
