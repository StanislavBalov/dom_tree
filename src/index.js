import './style.css';
import goblin from './goblin.png';

// Эта функция создаёт игровое поле и возвращает элемент board
export function createBoard() {
  const board = document.createElement('div');
  board.className = 'board';

  for (let i = 0; i < 16; i++) {
    const cell = document.createElement('div');
    cell.className = 'cell';
    board.appendChild(cell);
  }

  return board;
}

// Используем функцию, если скрипт запущен в браузере напрямую
if (typeof document !== 'undefined') {
  const board = createBoard();
  document.body.appendChild(board);

  const cells = board.querySelectorAll('.cell');

  const img = document.createElement('img');
  img.src = goblin;
  img.className = 'goblin';

  let current = Math.floor(Math.random() * 16);
  cells[current].appendChild(img);

  setInterval(() => {
    let next;
    do {
      next = Math.floor(Math.random() * 16);
    } while (next === current);
    cells[next].appendChild(img);
    current = next;
  }, 1000);
}
