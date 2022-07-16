// eslint-disable-next-line import/no-cycle
import { addBlockListeners, addShipContainerListener, removeAllDragListeners } from './listener';

const container = document.getElementById('container');
const info = document.getElementById('infoText');
const newGameBtn = document.getElementById('newGameBtn');

function clearContainer() {
  container.innerText = '';
}

function showInfo(text) {
  info.innerText = text;
}

function renderHorizontalShips(board, boardDOM) {
  for (let i = 0; i < board.size; i++) {
    for (let j = 0; j < board.size; j++) {
      const shipContainer = document.createElement('div');
      shipContainer.setAttribute('draggable', 'true');
      shipContainer.classList.add('shipContainer');
      shipContainer.setAttribute('id', `${i},${j}`);

      if (board.hasShip(i, j) && board.shipData[i][j].direction === 'horizontal') {
        const len = board.shipArr[board.shipData[i][j].shipIndex].length;

        shipContainer.style.gridRow = `${i + 1}/${i + 2}`;
        shipContainer.style.gridColumn = `${j + 1}/${j + 1 + len}`;
        shipContainer.style.gridTemplateColumns = `repeat(${len}, var(--blockSize))`;

        for (let time = 0; time < len; time++) {
          const block = document.createElement('div');
          block.classList.add('block');
          block.classList.add('ship');
          block.setAttribute('id', `${i},${j + time}`);
          if (board.isHit(i, j + time)) block.classList.add('attacked');

          shipContainer.appendChild(block);
        }

        boardDOM.appendChild(shipContainer);
        j += (len - 1);
      }
    }
  }
}

function renderVerticalShips(board, boardDOM) {
  for (let j = 0; j < board.size; j++) {
    for (let i = 0; i < board.size; i++) {
      const shipContainer = document.createElement('div');
      shipContainer.setAttribute('draggable', 'true');
      shipContainer.classList.add('shipContainer');
      shipContainer.setAttribute('id', `${i},${j}`);

      if (board.hasShip(i, j) && board.shipData[i][j].direction === 'vertical') {
        const len = board.shipArr[board.shipData[i][j].shipIndex].length;

        shipContainer.style.gridRow = `${i + 1}/${i + 1 + len}`;
        shipContainer.style.gridColumn = `${j + 1}/${j + 2}`;

        for (let time = 0; time < len; time++) {
          const block = document.createElement('div');
          block.classList.add('block');
          block.classList.add('ship');
          block.setAttribute('id', `${i + time},${j}`);
          if (board.isHit(i + time, j)) block.classList.add('attacked');

          shipContainer.appendChild(block);
        }

        boardDOM.appendChild(shipContainer);
        i += (len - 1);
      }
    }
  }
}

function renderShipContainer(board, boardDOM) {
  renderHorizontalShips(board, boardDOM);
  renderVerticalShips(board, boardDOM);
}

function renderPlayerBoard(player) {
  const playerName = document.createElement('h1');
  playerName.innerText = player.name;

  const boardDOM = document.createElement('div');
  boardDOM.classList.add('board');

  renderShipContainer(player.board, boardDOM);

  for (let i = 0; i < player.board.size; i++) {
    for (let j = 0; j < player.board.size; j++) {
      const block = document.createElement('div');
      block.setAttribute('id', `${i},${j}`);
      block.classList.add('block');

      if (player.board.hasShip(i, j)) {
        continue;
      }

      if (player.board.isHit(i, j)) block.classList.add('attacked');

      // SECTION make ship draggable
      if (player.board.hasShip(i, j)) {
        block.classList.add('ship');
        block.setAttribute('draggable', 'true');
      }

      boardDOM.appendChild(block);
    }
  }
  const wrapper = document.createElement('div');
  wrapper.classList.add('boardWrapper');
  wrapper.appendChild(playerName);
  wrapper.appendChild(boardDOM);
  container.appendChild(wrapper);

  addBlockListeners(player);
  addShipContainerListener(player, player.board);
}

function renderComputerBoard(player, computer) {
  const playerName = document.createElement('h1');
  playerName.innerText = computer.name;

  const boardDOM = document.createElement('div');
  boardDOM.classList.add('board');

  for (let i = 0; i < computer.board.size; i += 1) {
    for (let j = 0; j < computer.board.size; j += 1) {
      const block = document.createElement('div');
      block.classList.add('block');
      block.classList.add('computer');

      if (computer.board.isHit(i, j)) block.classList.add('attacked');
      if (computer.board.hasShip(i, j)) block.classList.add('ship');

      block.addEventListener('click', () => {
        // player's move
        if (computer.board.isHit(i, j) || player.lost() || computer.lost()) {
          return;
        }
        computer.board.receiveAttack(i, j);
        block.classList.add('attacked');
        if (computer.lost()) {
          showInfo(`${player.name} win!`);
          newGameBtn.style.display = 'block';
        }

        // computer's move
        computer.AIAttack(player.board);
        if (player.lost()) {
          showInfo(`${computer.name} win!`);
          newGameBtn.style.display = 'block';
        }

        // re-render to show blocks attacked
        clearContainer();
        renderPlayerBoard(player);
        renderComputerBoard(player, computer);
      });

      boardDOM.appendChild(block);
    }
  }
  const wrapper = document.createElement('div');
  wrapper.classList.add('boardWrapper');
  wrapper.appendChild(playerName);
  wrapper.appendChild(boardDOM);
  container.appendChild(wrapper);
  removeAllDragListeners();
}

export {
  renderComputerBoard, renderPlayerBoard, showInfo, clearContainer,
};
