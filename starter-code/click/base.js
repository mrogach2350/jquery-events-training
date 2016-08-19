console.log("Sanity Check: JS is working!");

$(document).ready(function (){

  $('span').on('click', function handleClick(event){
    var clicked = "You Clicked " + (this).text() + " at " + Date.now();
    $("ul").append('<li>' + clicked + "</li>")
  })

})
