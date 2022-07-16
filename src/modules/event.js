// eslint-disable-next-line import/no-cycle
import { clearContainer, renderPlayerBoard } from './DOM';

function cancelDefault(e) {
  e.preventDefault();
  e.stopPropagation();
  return false;
}

function addDropListeners(player) {
  const blocks = document.querySelectorAll('.block');

  for (let i = 0; i < blocks.length; i++) {
    blocks[i].addEventListener('drop', (e) => {
      const id = e.dataTransfer.getData('text/plain');
      const coord = id.split(',').map((item) => Number(item));
      const selfCoord = e.target.id.split(',').map((item) => Number(item));

      const data = player.board.shipData[coord[0]][coord[1]];
      const ship = player.board.shipArr[data.shipIndex];

      player.board.removeShip(coord[0], coord[1]);

      if (data.direction === 'vertical') {
        if (!player.board.placeShipVertically(ship.length, selfCoord[0] - coord[2], selfCoord[1])) {
          player.board.placeShipVertically(ship.length, coord[0], coord[1]);
        }
      } else if (!player.board.placeShipHorizontally(
        ship.length,
        selfCoord[0],
        selfCoord[1] - coord[2],
      )) {
        player.board.placeShipHorizontally(ship.length, coord[0], coord[1]);
      }

      clearContainer();
      renderPlayerBoard(player);
    });

    blocks[i].addEventListener('dragenter', cancelDefault);
    blocks[i].addEventListener('dragover', cancelDefault);
  }
}

// eslint-disable-next-line import/prefer-default-export
export { addDropListeners };
