Player = function(name) {
  this.options = {"rock": new Rock(), "paper": new Paper(),
      "scissors": new Scissors(), "lizard": new Lizard(), "spock": new Spock()};
  this.name = name;
} 

Player.prototype.choose = function(choice) {
  this.choice = this.options[choice];
};

Player.prototype.skynetChoice = function() {
  var keys = Object.keys(this.options);
  this.choice = this.options[keys[Math.random() * keys.length << 0]];
};  