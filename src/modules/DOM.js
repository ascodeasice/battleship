const container = document.getElementById('container');
const info = document.getElementById('infoText');

function clearContainer() {
  container.innerText = '';
}

function showInfo(text) {
  info.innerText = text;
}

function showWinner(player) {
  showInfo(`${player.name} won!`);
}

function cancelDefault(e) {
  e.preventDefault();
  e.stopPropagation();
  return false;
}

function renderShipContainer(board, boardDOM) {
  // SECTION find horizontal ships
  for (let i = 0; i < board.size; i++) {
    for (let j = 0; j < board.size; j++) {
      const shipContainer = document.createElement('div');
      shipContainer.classList.add('shipContainer');
      if (board.hasShip(i, j)) {
        const len = board.shipArr[board.shipData[i][j].shipIndex].length;
        shipContainer.style.gridRow = `${i + 1}/${i + 2}`;
        shipContainer.style.gridColumn = `${j + 1}/${j + 1 + len}`;
        shipContainer.style.gridTemplateColumns = `repeat(${len}, var(--blockSize))`;
      }
      while (j < board.size && board.hasShip(i, j) && board.shipData[i][j].direction === 'horizontal') {
        const block = document.createElement('div');
        block.classList.add('block');
        block.classList.add('ship');
        if (board.isHit(i, j)) block.classList.add('attacked');
        shipContainer.appendChild(block);
        j++;
      }
      if (shipContainer.childElementCount !== 0) {
        boardDOM.appendChild(shipContainer);
      }
    }
  }

  // SECTION find vertical ships
  for (let j = 0; j < board.size; j++) {
    for (let i = 0; i < board.size; i++) {
      const shipContainer = document.createElement('div');
      shipContainer.classList.add('shipContainer');
      if (board.hasShip(i, j)) {
        shipContainer.style.gridRow = `${i + 1}/${i + board.shipArr[board.shipData[i][j].shipIndex].length + 1}`;
        shipContainer.style.gridColumn = `${j + 1}/${j + 2}`;
      }
      while (i < board.size && board.hasShip(i, j) && board.shipData[i][j].direction === 'vertical') {
        const block = document.createElement('div');
        block.classList.add('block');
        block.classList.add('ship');
        shipContainer.appendChild(block);
        i++;
      }
      if (shipContainer.childElementCount !== 0) {
        boardDOM.appendChild(shipContainer);
      }
    }
  }
}

function renderPlayerBoard(player) {
  const playerName = document.createElement('h1');
  playerName.innerText = player.name;

  const boardDOM = document.createElement('div');
  boardDOM.classList.add('board');

  renderShipContainer(player.board, boardDOM);

  for (let i = 0; i < player.board.size; i += 1) {
    for (let j = 0; j < player.board.size; j += 1) {
      if (player.board.hasShip(i, j)) {
        continue;
      }
      const block = document.createElement('div');
      block.setAttribute('id', `${i},${j}`);
      block.classList.add('block');

      if (player.board.isHit(i, j)) block.classList.add('attacked');

      // SECTION make ship draggable
      if (player.board.hasShip(i, j)) {
        block.classList.add('ship');
        block.setAttribute('draggable', 'true');
        block.addEventListener('dragstart', (e) => {
          e.dataTransfer.setData('text/plain', e.target.id);// transfer id
        });
      } else {
        block.addEventListener('drop', (e) => {
          const id = e.dataTransfer.getData('text/plain');
          const coord = id.split(',');

          player.board.shipData[i][j] = player.board.shipData[coord[0]][coord[1]];

          player.board.shipData[coord[0]][coord[1]] = {
            shipIndex: -1,
            shipPos: -1,
          };

          block.classList.add('ship');
          document.getElementById(id).classList.remove('ship');
        });
        block.addEventListener('dragenter', cancelDefault);
        block.addEventListener('dragover', cancelDefault);
      }

      boardDOM.appendChild(block);
    }
  }
  const wrapper = document.createElement('div');
  wrapper.classList.add('boardWrapper');
  wrapper.appendChild(playerName);
  wrapper.appendChild(boardDOM);
  container.appendChild(wrapper);
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
        if (computer.lost()) showWinner(player);

        // computer's move
        computer.randomAttack(player.board);
        if (player.lost()) showWinner(computer);

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
}

export {
  renderComputerBoard, renderPlayerBoard, clearContainer as clearPage, showWinner, showInfo,
};
