// eslint-disable-next-line import/no-cycle
import { clearContainer, renderPlayerBoard } from './DOM';

function cancelDefault(e) {
  e.preventDefault();
  e.stopPropagation();
  return false;
}

// SECTION blocks
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

function addDragOverListeners() {
  const blocks = document.querySelectorAll('.block');

  for (let i = 0; i < blocks.length; i++) {
    blocks[i].addEventListener('dragover', () => {
      blocks[i].classList.add('hover');
    });

    blocks[i].addEventListener('dragleave', () => {
      blocks[i].classList.remove('hover');
    });
  }
}

function addBlockListeners(player) {
  addDropListeners(player);
  addDragOverListeners();
}

// SECTION shipContainers
function addShipContainerListener(player, board) {
  const containers = document.querySelectorAll('.shipContainer');
  for (let i = 0; i < containers.length; i++) {
    const children = containers[i].childNodes;
    let pos = 0;
    for (let position = 0; position < children.length; position++) {
      children[position].addEventListener('mouseenter', () => {
        pos = position; // get position of ship, decide how to place new ship
      });
    }

    containers[i].addEventListener('dragstart', (e) => {
      containers[i].classList.add('dragging');
      e.dataTransfer.setData('text/plain', `${e.target.id},${pos}`);// transfer id
    });

    containers[i].addEventListener('dragend', () => {
      containers[i].classList.remove('dragging');
    });

    // SECTION click to change direction

    containers[i].addEventListener('click', () => {
      const coord = containers[i].id.split(',').map((item) => Number(item));
      const data = board.shipData[coord[0]][coord[1]];
      const ship = board.shipArr[data.shipIndex];

      board.removeShip(coord[0], coord[1]);

      //  try to remove and place in differnet direction
      //  if doesn't work, place back the original one.
      if (data.direction === 'vertical') {
        if (!board.placeShipHorizontally(ship.length, coord[0], coord[1])) {
          board.placeShipVertically(ship.length, coord[0], coord[1]);
        }
      } else if (!board.placeShipVertically(ship.length, coord[0], coord[1])) {
        board.placeShipHorizontally(ship.length, coord[0], coord[1]);
      }

      clearContainer();
      renderPlayerBoard(player);
    });
  }
}

function removeAllDragListeners() {
  // NOTE cloneNode doesn't clone event listener
  const blocks = document.querySelectorAll('.block:not(.computer)');
  const shipContainers = document.querySelectorAll('.shipContainer');
  for (let i = 0; i < blocks.length; i++) {
    blocks[i].replaceWith(blocks[i].cloneNode(true));
  }

  for (let i = 0; i < shipContainers.length; i++) {
    shipContainers[i].setAttribute('draggable', 'false');
    shipContainers[i].replaceWith(shipContainers[i].cloneNode(true));
  }
}

// eslint-disable-next-line import/prefer-default-export
export { addBlockListeners, addShipContainerListener, removeAllDragListeners };
