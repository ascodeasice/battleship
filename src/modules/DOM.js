const container = document.getElementById('container');
const info = document.getElementById('infoText');

function clearPage() {
  container.innerText = '';
}

function renderBoard(player) {
  const playerName = document.createElement('h1');
  playerName.innerText = player.name;

  const boardDOM = document.createElement('div');
  boardDOM.classList.add('board');

  for (let i = 0; i < player.board.size; i += 1) {
    for (let j = 0; j < player.board.size; j += 1) {
      const block = document.createElement('div');
      block.classList.add('block');

      if (player.board.isHit(i, j)) {
        block.classList.add('attacked');
      }
      if (player.board.hasShip(i, j)) {
        block.classList.add('ship');
      }

      block.addEventListener('click', () => {
        if (player.board.isHit(i, j)) {
          return false;
        }
        player.board.receiveAttack(i, j);
        block.classList.add('attacked');
        return true;
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

function showWinner(player) {
  info.innerText = `${player.name} won!`;
}

export { renderBoard, clearPage, showWinner };
