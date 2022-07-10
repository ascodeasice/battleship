const container = document.getElementById('container');
const info = document.getElementById('infoText');

function clearPage() {
  container.innerText = '';
}

function showWinner(player) {
  info.innerText = `${player.name} won!`;
}

function renderPlayerBoard(player) {
  const playerName = document.createElement('h1');
  playerName.innerText = player.name;

  const boardDOM = document.createElement('div');
  boardDOM.classList.add('board');

  for (let i = 0; i < player.board.size; i += 1) {
    for (let j = 0; j < player.board.size; j += 1) {
      const block = document.createElement('div');
      block.classList.add('block');

      if (player.board.isHit(i, j)) block.classList.add('attacked');
      if (player.board.hasShip(i, j)) block.classList.add('ship');

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
        clearPage();
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
  renderComputerBoard, renderPlayerBoard, clearPage, showWinner,
};
