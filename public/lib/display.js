var skynet = new Player("Skynet");
var player = new Player("Player");
var game = new Game(player, skynet);

$(document).ready(function() {
  $('.weapons').on('mouseenter', 'img', function() {
    $(this).addClass("highlight");
  });
  $('.weapons').on('mouseleave', 'img', function() {
    $(this).removeClass("highlight");
  });

  $('.weapons').on('click', 'img', function() {
    $(this).animate({'top': '-14px'}, 'fast').animate({'top': '0px'}, 'fast');
    $('#result').find('p').slideUp(function () {
      $(this).remove();
    });

    player.choose($(this).data('choice'));
    skynet.skynetChoice();

    $('#result').prepend('<p>' + game.winMessage() + '</p>').slideDown();

  });

});