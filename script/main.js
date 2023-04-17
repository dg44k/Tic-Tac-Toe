const gameBoard = (function () {
  const fieldDOM = document.querySelector(".field");
  window.onload = () => generationCellsField(fieldDOM);
  function generationCellsField(field) {
    for (let i = 0; i < 9; i++)
      field.appendChild(document.createElement("div"));
  }

  let gameField = ["", "", "", "", "", "", "", "", ""];
  let winningConditions = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];
  return {
    gameField,
    winningConditions,
  };
})();
const player = function (name, symbol) {
  this.symbol = symbol;
  this.name = name;
  this.countWins = 0;
  this.countTies = 0;
  this.cells = [];
  return {
    symbol,
    name,
    countWins,
    countTies,
    cells,
  };
};

const playerFirst = player("Kolya", "x");
const playerOther = player("Danil", "o");

const gameController = (function (playerFirst, playerOther, gameBoard) {
  const setStep = (player, cell) => {
    player.cells.push(gameBoard.gameField[cell]);
  };
  const battle = () => {
    if (playerFirst.symbol === "x") setStep(playerFirst, 1);
    else setStep(playerOther, 2);
    //сделать ход
    //Игра представляет собой цикл
    //проверка на победу
    //переход хода
  };
  battle();
})(playerFirst, playerOther, gameBoard);
