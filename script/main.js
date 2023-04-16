const gameBoard = (function () {
  let gameField = ['', '', '', '', '', '', '', '', ''];
  let winningConditions = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
  ];
  return {
    gameField,
    winningConditions,
  };
})();

const player = function (name, symbol) {
  this.symbol = symbol;
  this.name = name;
  this.count;
  this.step;
  return {
    symbol,
    name,
  };
};

const playerFirst = player("Kolya", "x");
const playerOther = player("Danil", "o");

const gameController = (function (playerFirst, playerOther, gameBoard) {
  const setStep = (chooseCell) => {
    return gameBoard[chooseCell];
  };
  const battle = (playerFirst, playerOther) => {
    if (playerFirst.symbol === "x") {
      playerFirst;
    } else {
      playerFirst.step = 2;
      playerOther.step = 1;
    }
  };
  battle(playerFirst, playerOther);
})();
