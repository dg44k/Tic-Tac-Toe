const gameBoard = (function () {
  let gameGrid = [[0, 0, 0], 
                  [0, 0, 0], 
                  [0, 0, 0]];
  return gameGrid;
})();

const player = function(symbol){
  this.chooseSymbol = symbol;
  return{
    chooseSymbol,
  }
}

const playerFirst = player("x");
const playerOther = player("o");


