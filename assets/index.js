'use strict';
/*$(document).ready(function() {
  
  //crear un div que será el contenedor
  var $elDiv = $('<div></div>')
    .addClass('sw')
    .addClass('sw-normal')

  var $elContainer = $('<div></div>')
    .addClass('sw-container');

  var $spanTrue = $('<span></span>')
    .addClass('sw-indicator-true')
    .addClass('bg-primary')
    .text('Si');
  var $spanFalse = $('<span></span>')
    .addClass('sw-indicator-false')
    .addClass('bg-warning')
    .text('No');
  var $spanDial = $('<span></span>')
    .addClass('sw-dial')
    .text('|||');

  $elContainer.append($spanTrue).append($spanDial).append($spanFalse);
  $elDiv.append($elContainer);

  $('#chk').change( function(e) {
    alert( $elChk.prop('checked')?' Chequeado':' No Chekeado' );
  });

  var $elChk = $("#chk").clone(true);
  $elChk
    .addClass('sw-chk');

  $elDiv.click( function(e) {
    if($elDiv.hasClass('checked') ){
      $elDiv.removeClass('checked');
      $elChk.prop('checked', false).trigger('change');
    } else {
      $elDiv.addClass('checked');
      $elChk.prop('checked', true).trigger('change');
    }
  });

  $elDiv.append($elChk);
  $('#chk').replaceWith($elDiv);
});*/




$('#chk')
  .MBSwitch({size:'lg'})
  .change( function(e) {
    $('#estadoChk').text( $(this).prop('checked')?'Si':'No' );
  });;

