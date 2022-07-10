import './style.css';
import { renderComputerBoard, renderPlayerBoard } from './modules/DOM';
import Player from './modules/Player';

const player = Player('Player', 10);
const computer = Player('Computer', 10);

player.board.placeShipsRandomly(player.board);
computer.board.placeShipsRandomly(computer.board);

renderPlayerBoard(player);
renderComputerBoard(player, computer);
