// console.log("javascript is linked")
var gameOver = false;
$(document).ready(function(){
    console.log("document is loaded")
    $('.start').on("click", function(){
      //if the button has a class "start" then add the players
          resetGame();
          addPlayers();
    })
    $('.restart').on("click", function(){
          resetGame();
    })
    //add event listener for keydown on the right arrow keycode 39
    $(document).keydown(function(key){
      if(key.keyCode === 39 && gameOver === false){
        movePlayers("p1");
      }
      if(key.keyCode === 68 && gameOver === false){
        movePlayers("p2");
      }
    });
    //TODO: bring instructions in when users hover on
    //the instructions header
    // $("#instructions").on('hover', function(){
    //   $("p").css('display', 'inline')
    // })
})

//when you click the start button, add your two players to the board
//TODO:disable the ability to add duplicate players

function addPlayers(){
  $("#player1-start").addClass("player1-playing")
  $("#player2-start").addClass("player2-playing")
  $('button').removeClass('start').addClass("game-started")
  $('#div6').addClass('donuts')
}
function movePlayers(player){
  //remove classes for player1-playing and player2-playing from current divs
  //and add them to the next sibling div

  if(player === "p1"){
    $('.player1-playing').removeClass("player1-playing").next().addClass('player1-playing')
  }
  if(player === "p2"){
    $('.player2-playing').removeClass("player2-playing").next().addClass('player2-playing')
  }
  //run a calculateWinner function
  calculateWinner()
  // gameOver = true;
}

function calculateWinner(){
  // console.log($('#p1finishLine'))
  // console.log($("#p1finishLine").hasClass("player1-playing"))
  if($("#p1finishLine").hasClass("player1-playing")
  && $("#p2finishLine").hasClass("player2-playing")){
    $(".win-banner").css("display", "block").text("You tied!")
    $("#p1finishLine").addClass("animated bounceOutUp")
    gameOver = true;
  }
   else if($("#p1finishLine").hasClass("player1-playing")){
    $(".win-banner").css('display', 'block').text('Lisa grabbed the donuts and dashed to victory! ')
    $("#p1finishLine").addClass("animated bounceOutUp")
    $("#p2finishLine").addClass("animated bounceOutUp")
    $('.player2-playing').addClass('animated fadeOutDown')
    gameOver = true;
  }
  else if($("#p2finishLine").hasClass("player2-playing")){
    $(".win-banner").css('display', 'block').text('Homer devoured the donuts and ran away gleefully!')
    $("#p2finishLine").addClass("animated bounceOutUp")
    $("#p1finishLine").addClass("animated bounceOutUp")
    $('.player1-playing').addClass('animated fadeOutDown')
    gameOver = true;
  }

  // console.log("going to calculate the winner")
}

function resetGame(){
  //remove player1-playing
  $("div").removeClass('player1-playing')
  //remove player2-playing
  $("div").removeClass('player2-playing')
  //set gameOver to false
  gameOver = false;
  //remove win banner
  $(".win-banner").css("display", "none")
  $(".trackSize").removeClass('animated bounceOutUp jello')
}
