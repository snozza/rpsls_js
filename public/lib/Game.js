Game = function(player1, player2) {
  this.rules = new Rules();
  this.player1 = player1 || new Player("Player1");
  this.player2 = player2 || new Player("Skynet");
}

Rules = function() {
}         

Rock = function() {
  this.type = "Rock";
  this.index = 0;
  this.attack = "crushes"
}

Paper = function() {
  this.type = "Paper";
  this.index = 1;
  this.attack = "covers"
}

Scissors = function() {
  this.type = "Scissors";
  this.index = 2;
  this.attack = "cuts";
}

Lizard = function() {
  this.type = "Lizard";
  this.index = 3;
  this.attack = "eats"
}

Spock = function() {
  this.type = "Spock";
  this.index = 4;
  this.attack = "vaporizes";
}

Draw = function() {
  this.type = "Draw";
}

Game.prototype.winner = function() {
  var winWeapon = this.rules.winningChoiceOf(this.player1.choice, this.player2.choice);
  if(winWeapon === new Draw()) return [new Draw()];
  return this.player1.choice === winWeapon ? [this.player1, this.player2] : [this.player2, this.player1];
};

Game.prototype.winMessage = function () {
  var result = this.winner();
  this.msg = result[0] === new Draw ? "It was a draw" : 
      result[0].name + "\'s " + result[0].choice.type + " " + result[0].choice.attack + 
      " " + result[1].name + "\'s " + result[1].choice.type;
  return this.msg;
};


Rules.prototype.winningChoiceOf = function (choice1, choice2) {
  return [new Draw(), choice2, choice1, choice1, choice2,
          choice1, new Draw(), choice2, choice2, choice1,
          choice2, choice1, new Draw(), choice1, choice2,
          choice2, choice1, choice2, new Draw(), choice1,
          choice1, choice2, choice1, choice2, new Draw()][choice1.index * 5 + choice2.index];
};

  


