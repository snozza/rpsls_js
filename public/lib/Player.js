Player = function(name) {
  this.name = name;
} 

Player.prototype.choice = function(choice) {
  this.choice = choice
};

Player.prototype.skynetChoice = function() {
  var options = [new Rock(), new Paper(), new Scissors(),
                 new Lizard(), new Spock()];
  this.choice = options[Math.floor(Math.random() * options.length)];
};  