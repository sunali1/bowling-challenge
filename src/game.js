function Game() {
  this.rolls = [];
}

Game.prototype.roll= function(pins) {
  if(this.rolls.length === 21){
  this.endGameMessage;
} else {
  this.rolls.push(pins);
}
};

Game.prototype.score = function () {
  var result = 0;
  var rollIndex = 0;
  var game = this;
  for (var frameIndex =0; frameIndex < 10; frameIndex++) {
    if (isStrike()) {
      this.strikeMessage;
      result += getStrikeScore();
      rollIndex++;
    }else if (isSpare()) {
        result += getSpareScore();
        rollIndex += 2;
    } else {
      result += getNormalScore();
      rollIndex += 2;
    }
  }
    return result;
    console.log(result);

    function isSpare(){
      return game.rolls[rollIndex] + game.rolls[rollIndex + 1] === 10;
    }
    function isStrike(){
      return game.rolls[rollIndex] === 10;
    }
    function getSpareScore() {
      return game.rolls[rollIndex] + game.rolls[rollIndex + 1] + game.rolls[rollIndex + 2];
    }
    function getStrikeScore() {
      return game.rolls[rollIndex]+ game.rolls[rollIndex + 1]+ game.rolls[rollIndex + 2];
    }
    function getNormalScore() {
      return game.rolls[rollIndex] + game.rolls[rollIndex + 1];
    }
};

Game.prototype.endGameMessage = function () {
  return "Congratulations! Game ended. Start a new game"
};
Game.prototype.strikeMessage = function () {
  return "TAKE A BOW its a STRIKE!"
};
