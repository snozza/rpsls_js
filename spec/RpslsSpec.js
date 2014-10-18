describe('To play Rock Paper Scissors', function () {

  beforeEach(function() {
    rock = new Rock();
    scissors = new Scissors();
    paper = new Paper();
  });

  describe('types of weapons', function() {
    it('Rock', function() {
      expect(rock.type).toEqual("Rock");
    });

    it('Scissors', function() {
      expect(scissors.type).toEqual('Scissors');
    });

    it('Paper', function() {
      expect(paper.type).toEqual('Paper');
    });

    it('Lizard', function() {
      expect(lizard.type).toEqual('Lizard');
    });
  });

  describe('Rules of the game', function() {
    beforeEach(function() {
      rules = new Rules();
    });

    it('Rock beats Scissors', function() {
      expect(rules.winningChoiceOf(rock, scissors)).toEqual(rock);
    });

    it('Scissors is beaten by Rock', function() {
      expect(rules.winningChoiceOf(scissors, rock)).toEqual(rock);
    });

    it('Scissors beats Paper', function() {
      expect(rules.winningChoiceOf(scissors, paper)).toEqual(scissors);
    });

    it('Paper is beaten by Scissors', function() {
      expect(rules.winningChoiceOf(paper, scissors)).toEqual(scissors);
    });

    it('Paper beats rock', function() {
      expect(rules.winningChoiceOf(paper, rock)).toEqual(paper);
    });

    it('Rock is beaten by Paper', function() {
      expect(rules.winningChoiceOf(rock, paper)).toEqual(paper);
    });

    it('Rock beats lizard', function() {
      expect(rules.winningChoiceOf(rock, lizard)).toEqual(rock);
    });

    it('Lizard loses to Rock', function() {
      expect(rules.winningChoiceOf(lizard, rock)).toEqual(rock);
    });

    it('Lizard beats Paper', function() {
      expect(rules.winningChoiceOf(lizard, paper)).toEqual(lizard);
    });

    it('Paper is beaten by Lizard', function() {
      expect(rules.winningChoiceOf(paper, lizard)).toEqual(lizard);
    });

    it('Scissors beats lizard', function() {
      expect(rules.winningChoiceOf(scissors, lizard)).toEqual(scissors);
    });

    it('Lizard is beaten by scissors', function() {
      expect(rules.winningChoiceOf(lizard, scissors)).toEqual(scissors);
    });

    it('Lizard beats spock', function() {
      expect(rules.winningChoiceOf(lizard, spock)).toEqual(lizard);
    });

    it('Spock is beaten by Lizard', function() {
      expect(rules.winningChoiceOf(spock, lizard)).toEqual(lizard);
    });

    it('Paper beats Spock', function() {
      expect(rules.winningChoiceOf(paper, spock)).toEqual(paper);
    });

    it('Spock is beaten by paper', function() {
      expect(rules.winningChoiceOf(spock, paper)).toEqual(paper);
    });

    it('Spock beats rock', function() {
      expect(rules.winningChoiceOf(spock, rock)).toEqual(spock);
    });

    it('Rock is beaten by Spock', function() {
      expect(rules.winningChoiceOf(rock, spock)).toEqual(rock);
    });

    it('Spock beats scissors', function() {
      expect(rules.winningChoiceOf(spock, scissors)).toEqual(spock);
    });

    it('Scissors is beaten by Spock', function() {
      expect(rules.winningChoiceOf(scissors, spock)).toEqual(spock);
    });

    it('The same weapon', function() {
      otherRock = new Rock();
      draw = new Draw();
      expect(rules.winningChoiceOf(rock, otherRock)).toEqual(draw);       
    });

  });

});