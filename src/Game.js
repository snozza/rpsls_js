Game = function(player1, player2) {
  this.rules = new Rules();
  this.player1 = player1 || "Player1";
  this.player2 = player2 || "Skynet";
}

Rules = function() {
}         

Rock = function() {
  this.type = "Rock";
  this.index = 0;
}

Paper = function() {
  this.type = "Paper";
  this.index = 1;
}

Scissors = function() {
  this.type = "Scissors";
  this.index = 2;
}

Lizard = function() {
  this.type = "Lizard";
  this.index = 3;
}

Spock = function() {
  this.type = "Spock";
  this.index = 4;
}

Draw = function() {
  this.type = "Draw";
}

Rules.prototype.winningChoiceOf = function (choice1, choice2) {
  return [new Draw(), choice2, choice1, choice1, choice2,
          choice1, new Draw(), choice2, choice2, choice1,
          choice2, choice1, new Draw(), choice1, choice2,
          choice2, choice1, choice2, new Draw(), choice1,
          choice1, choice2, choice1, choice2, new Draw()][choice1.index * 5 + choice2.index];
}

  


