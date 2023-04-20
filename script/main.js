const gameBoard = (function () {
  const fieldDOM = document.querySelector(".field");
  generationCellsField(fieldDOM);

  function generationCellsField(field) {
    for (let i = 0; i < 9; i++) {
      const div = document.createElement("div");
      field.appendChild(div);
      div.setAttribute("data-number", `${i}`);
    }
  }

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
    currentPlayer.cells.push(+e.target.getAttribute("data-number"));
    console.log(currentPlayer.cells);
    if (currentPlayer.cells.length >= 3) {
      console.log(checkOnWin(currentPlayer));
    }
    if (playerFirst.step === true) playerFirst.step = false;
    else playerFirst.step = true;
  };
  const checkOnWin = (currentPlayer) => {
    let counterHit = 0;
    let i = 0;

    while (i < gameBoard.winningConditions.length) {
      for (let j = 0; j < 3; j++) {
        if (currentPlayer.cells.indexOf(gameBoard.winningConditions[i][j]) === -1) break;
        else counterHit++;
      }
      if (counterHit === 3) return true;
      counterHit = 0;
      i++;
    }
    return false;
  };
  gameBoard.fieldDOM.addEventListener("click", setStep);
})();
