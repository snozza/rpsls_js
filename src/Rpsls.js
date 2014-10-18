function Rules() {
}

function Rock() {
  this.type = "Rock";
  this.index = 0;
}

function Paper() {
  this.type = "Paper";
  this.index = 1;
}

function Scissors() {
  this.type = "Scissors";
  this.index = 2;
}

function Lizard() {
  this.type = "Lizard";
  this.index = 3;
}

function Spock() {
  this.type = "Spock";
  this.index = 4;
}

function Draw() {
  this.type = "Draw";
}

Rules.prototype.winningChoiceOf = function (choice1, choice2) {
  return ["Draw", "Paper", "Rock", "Rock", "Spock",
          "Paper", "Draw", "Scissors", "Lizard", "Paper",
          "Rock", "Scissors", "Draw", "Scissors", "Spock",
          "Rock", "Lizard", "Scissors", "Draw", "Lizard",
          "Spock", "Paper", "Spock", "Lizard", "Draw"][choice1.index * 5 + choice2.index];
}

Rules.prototype.winningChoiceOf = function (choice1, choice2) {
  return [new Draw, choice2, choice1, choice1, choice2,
          choice1, new Draw, choice2, choice2, choice1,
          choice2, choice1, new Draw, choice1, choice2,
          choice2, choice1, choice2, new Draw, choice1,
          choice1, choice2, choice1, choice2, new Draw][choice1.index * 5 + choice2.index];
}
