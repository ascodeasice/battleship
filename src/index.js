import './style.css';
import { renderComputerBoard, renderPlayerBoard, showInfo } from './modules/DOM';
import Player from './modules/Player';

const player = Player('Player', 10);
const computer = Player('Computer', 10);
const startBtn = document.getElementById('startBtn');

player.board.placeShipsRandomly(player.board);
computer.board.placeShipsRandomly(computer.board);

showInfo('Place your ship by drag and drop.\n click to change direction');

renderPlayerBoard(player);
startBtn.addEventListener('click', () => {
  renderComputerBoard(player, computer);
});

// showInfo('Attack the enemy\'s board');
