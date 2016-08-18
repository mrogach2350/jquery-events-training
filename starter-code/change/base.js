console.log("Sanity Check: JS is working!");

$(document).ready(function(){
  $("#time").text( Date.now() );

  $('input').change(handleNums);
  function handleNums(){
    var left = $('#left').val();
    var right = $('#right').val();
    var total = Number(left) + Number(right);
    $('#total').val(total);
    console.log("response");
  }
})
