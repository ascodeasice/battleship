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

function addShipContainerListener(player, board) {
  const containers = document.querySelectorAll('.shipContainer');
  for (let i = 0; i < containers.length; i++) {
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

function renderHorizontalShips(player, board, boardDOM) {
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

          // SECTION add drop event listener
          block.addEventListener('drop', (e) => {
            const id = e.dataTransfer.getData('text/plain');
            const coordStr = id.split(',');
            const coord = coordStr.map((item) => Number(item));

            const data = player.board.shipData[coord[0]][coord[1]];
            const ship = player.board.shipArr[data.shipIndex];

            // TODO when placing ship from non-start position, need to -pos
            player.board.removeShip(coord[0], coord[1]);

            const selfCoord = e.target.id.split(',').map((item) => Number(item));

            if (!player.board.placeShipHorizontally(
              ship.length,
              selfCoord[0],
              selfCoord[1] - coord[2],
            )) {
              player.board.placeShipHorizontally(ship.length, coord[0], coord[1]);
            }

            clearContainer();
            renderPlayerBoard(player);
          });

          block.addEventListener('dragenter', cancelDefault);
          block.addEventListener('dragover', cancelDefault);

          shipContainer.appendChild(block);
        }

        const children = shipContainer.childNodes;
        let pos = 0; // position of block
        for (let position = 0; position < children.length; position++) {
          children[position].addEventListener('mouseenter', () => {
            pos = position;
          });
        }

        shipContainer.addEventListener('dragstart', (e) => {
          e.dataTransfer.setData('text/plain', `${e.target.id},${pos}`);// transfer id
        });

        boardDOM.appendChild(shipContainer);
        j += (len - 1);
      }
    }
  }
}

function renderVerticalShips(player, board, boardDOM) {
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

          // SECTION add drop event listener
          block.addEventListener('drop', (e) => {
            const id = e.dataTransfer.getData('text/plain');
            const coordStr = id.split(',');
            const coord = coordStr.map((item) => Number(item));
            // NOTE coord[2] is position of block

            const data = player.board.shipData[coord[0]][coord[1]];
            const ship = player.board.shipArr[data.shipIndex];

            // TODO when placing ship from non-start position, need to -pos
            player.board.removeShip(coord[0], coord[1]);

            const selfCoord = e.target.id.split(',').map((item) => Number(item));

            if (!player.board.placeShipVertically(
              ship.length,
              selfCoord[0] - coord[2],
              selfCoord[1],
            )) {
              player.board.placeShipVertically(ship.length, coord[0], coord[1]);
            }

            clearContainer();
            renderPlayerBoard(player);
          });

          block.addEventListener('dragenter', cancelDefault);
          block.addEventListener('dragover', cancelDefault);

          shipContainer.appendChild(block);
        }

        const children = shipContainer.childNodes;
        let pos = 0; // position of block
        for (let position = 0; position < children.length; position++) {
          children[position].addEventListener('mouseenter', () => {
            pos = position;
          });
        }

        shipContainer.addEventListener('dragstart', (e) => {
          e.dataTransfer.setData('text/plain', `${e.target.id},${pos}`);// transfer id
        });

        boardDOM.appendChild(shipContainer);
        i += (len - 1);
      }
    }
  }
}

function renderShipContainer(player, board, boardDOM) {
  renderHorizontalShips(player, board, boardDOM);
  renderVerticalShips(player, board, boardDOM);
}

function renderPlayerBoard(player) {
  const playerName = document.createElement('h1');
  playerName.innerText = player.name;

  const boardDOM = document.createElement('div');
  boardDOM.classList.add('board');

  renderShipContainer(player, player.board, boardDOM);

  for (let i = 0; i < player.board.size; i++) {
    for (let j = 0; j < player.board.size; j++) {
      const block = document.createElement('div');
      block.setAttribute('id', `${i},${j}`);
      block.classList.add('block');

      // SECTION add drag and drop event listener
      block.addEventListener('drop', (e) => {
        const id = e.dataTransfer.getData('text/plain');
        const coordStr = id.split(',');
        const coord = coordStr.map((item) => Number(item));

        const data = player.board.shipData[coord[0]][coord[1]];
        const ship = player.board.shipArr[data.shipIndex];

        // TODO when placing ship from non-start position, need to -pos
        player.board.removeShip(coord[0], coord[1]);

        if (data.direction === 'vertical') {
          if (!player.board.placeShipVertically(ship.length, i - coord[2], j)) {
            player.board.placeShipVertically(ship.length, coord[0], coord[1]);
          }
        } else if (!player.board.placeShipHorizontally(ship.length, i, j - coord[2])) {
          player.board.placeShipHorizontally(ship.length, coord[0], coord[1]);
        }

        clearContainer();
        renderPlayerBoard(player);
      });
      block.addEventListener('dragenter', cancelDefault);
      block.addEventListener('dragover', cancelDefault);

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
  renderComputerBoard, renderPlayerBoard, showWinner, showInfo,
};
