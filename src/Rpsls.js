Rules = function() {
}

Draw = function() {
  this.type = "Draw";
}

Rules.prototype.winningChoiceOf = function (choice1, choice2) {
  return [new Draw, choice2, choice1, choice1, choice2,
          choice1, new Draw, choice2, choice2, choice1,
          choice2, choice1, new Draw, choice1, choice2,
          choice2, choice1, choice2, new Draw, choice1,
          choice1, choice2, choice1, choice2, new Draw][choice1.index * 5 + choice2.index];
}
