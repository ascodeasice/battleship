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
const container = document.getElementById('container');

let player = Player('You', 10);
let computer = Player('Computer', 10);

function startNewGame() {
  clearContainer();
  player = Player('You', 10);
  computer = Player('Computer', 10);
  player.board.placeShipsRandomly(player.board);
  computer.board.placeShipsRandomly(computer.board);

  showInfo('Drag and drop to place your ships (gray blocks),\n click them to change direction.');
  renderPlayerBoard(player);
  newGameBtn.style.display = 'none';
  startBtn.style.display = 'block';
  container.style.justifyContent = 'center';
}

startBtn.addEventListener('click', () => {
  renderComputerBoard(player, computer);
  startBtn.style.display = 'none';
  container.style.justifyContent = 'space-evenly';
  showInfo('Attack the enemy\'s board by clicking it');
});

newGameBtn.addEventListener('click', startNewGame);

startNewGame();
