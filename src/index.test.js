import { createBoard } from './index.js'; // функция, создающая DOM-элементы игрового поля

test('Создаётся игровое поле с 16 ячейками', () => {
  document.body.innerHTML = ''; // очистка DOM
  const board = createBoard();
  document.body.appendChild(board);

  // Проверяем, что board содержит ровно 16 дочерних элементов (ячеек)
  expect(board.children.length).toBe(16);

  // Проверяем, что у каждой ячейки есть класс "cell"
  Array.from(board.children).forEach(cell => {
    expect(cell.classList.contains('cell')).toBe(true);
  });
});
