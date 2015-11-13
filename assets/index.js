'use strict';

$(document).ready(function($) {
  $('#chkLg')
    .MBSwitch({size:'lg'})
    .change( function(e) {
      $('#estadoChkLg').text( $(this).prop('checked')?'Si':'No' );
    });

  $('#chkMd')
    .MBSwitch({size:'md'})
    .change( function(e) {
      $('#estadoChkMd').text( $(this).prop('checked')?'Si':'No' );
    });;

  $('#chkSm')
    .MBSwitch({size:'sm'})
    .change( function(e) {
      $('#estadoChkSm').text( $(this).prop('checked')?'Si':'No' );
    });;

  $('#chkXs')
    .MBSwitch({size:'xs'})
    .change( function(e) {
      $('#estadoChkXs').text( $(this).prop('checked')?'Si':'No' );
    });;

  //crear chekcbox dinamico
  var $elChk = $('<input type="chekcbox">');

  $elChk
    .MBSwitch()
    .change( function(e) {
      $('#estadoChkDn').text( $(this).prop('checked')?'Si':'No' );
    });

  $('#containerDinamico').append( $elChk.getAllElement() );
});




