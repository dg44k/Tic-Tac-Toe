const gameBoard = (function () {
  const fieldDOM = document.querySelector(".field");
  generationCellsField(fieldDOM);
  function generationCellsField(field) {
    for (let i = 0; i < 9; i++)
      field
        .appendChild(document.createElement("div"))
        .classList.add("cell-field");
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
    fieldDOM,
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

const gameController = (function () {
  if (playerFirst.symbol === "x") playerFirst.step = true;
  else playerFirst.step = false;
  const setStep = (e) => {
    let currentPlayer = playerFirst.step ? playerFirst : playerOther;
    if (e.target == gameBoard.fieldDOM) return;
    e.target.textContent = currentPlayer.symbol;
    if (playerFirst.step === true) playerFirst.step = false;
    else playerFirst.step = true;
  };
  const checkOnWin = () => {};
  gameBoard.fieldDOM.addEventListener("click", setStep);
})();
