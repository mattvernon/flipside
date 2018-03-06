// STRIPE CHECKOUT =================================================



//

$(document).ready(function(){
  console.log("JS is WORKING");
})

$('#print-link').click(function(){

  $('#print-link').addClass('selected')
  $('#print-details').show()
  $('#email-link').removeClass('selected')
  $('#email-details').hide()
  return false;

});

$('#email-link').click(function(){

  $('#email-link').addClass('selected')
  $('#email-details').show()
  $('#print-link').removeClass('selected')
  $('#print-details').hide()
  return false;

});

$('.asap-button').click(function(){

  $('.asap-button').toggleClass('selected')

    if ($('#delivery-date').attr("disabled")) {
        $('#delivery-date').removeAttr("disabled");
    } else {
        $('#delivery-date').attr("disabled", "disabled");
    }

  return false

});
