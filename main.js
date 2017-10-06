console.log("javascript is linked")

$(document).ready(function(){
    console.log("document is loaded")
    $('.start').on("click", function(){
      //if the button has a class "start" then add the players
      //if the button doesn't have a class of start, then
      //they have already been added! Don't add duplicates
          addPlayers();
    })
    //add event listener for keydown on the right arrow keycode 39
    $(document).keydown(function(key){
      if(key.keyCode === 39){
        console.log("you pressed the right key!")
        movePlayers();
      }
    });
})

function addPlayers(){
  $("#player1-start").append("<img src='images/lisa-simpson.png' id='p1-playing'/>")
  $("#player2-start").append("<img src='images/homer-simpson.png' id='p2-playing'/>")
  $('button').removeClass('start').addClass("game-started")
}

function movePlayers(){
  console.log(this.div)
  $('#p1-playing').remove('img')
  $('#div2').append("<img src='images/lisa-simpson.png' id='p1-playing'/>")
}

