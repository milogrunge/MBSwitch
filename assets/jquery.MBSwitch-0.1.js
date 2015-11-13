/*============================================================================
 * MBSwitch 0.3
 *
 * Author: Emilio Ahumada
 * License: GPLv3
 *===========================================================================
 * This plugin needs Bootstrap 3 for work, but you can hack the code to remove this dependency.
 */
'use strict';
(function($) {
  $.fn.MBSwitch = function(customOptions) {
    var options = $.extend({
      textYes: 'Si',
      textNo: 'No',
      colorYes: 'primary', //colores bootstrap primary, success, warning, danger
      colorNo: 'warning', //colores bootstrap primary, success, warning, danger
      size: 'md', //tamaños xs, sm, md, lg
    }, customOptions);

    //dibujar el objeto
    var $this = $(this); //el objeto 

    //crear los elementos
    //Primero creo los span
    var $spanTrue = $('<span></span>')
      .addClass('sw-indicator-true')
      .addClass('bg-'+options.colorYes)
      .text(options.textYes);

    var $spanFalse = $('<span></span>')
      .addClass('sw-indicator-false')
      .addClass('bg-'+options.colorNo)
      .text(options.textNo);

    var $spanDial = $('<span></span>')
      .addClass('sw-dial')
      .text('|||');

    var $elContainer = $('<div></div>')
      .addClass('sw-container');

    //luego los contenedores
    $elContainer.append($spanTrue).append($spanDial).append($spanFalse);

    var $elDiv = $('<div></div>')
      .addClass('sw')
      .addClass('sw-'+options.size);

    $elDiv.append($elContainer);

    //clonar el checkbox y manejar sus eventos
    var $elChk = $this.clone(true);
    $elChk
      .addClass('sw-chk');
    
    //si el chk está checkeado dejo el sw activo
    $elDiv.addClass($elChk.prop('checked')?'checked':'');
    //evento click del sw
    $elDiv.click( function(e) {
      if($elDiv.hasClass('checked') ){
        $elDiv.removeClass('checked');
        $elChk.prop('checked', false).trigger('change');
      } else {
        $elDiv.addClass('checked');
        $elChk.prop('checked', true).trigger('change');
      }
    });

    //agregar el chk al sw reemplzara el chk original por el sw
    $elDiv.append($elChk);
    $('#chk').replaceWith($elDiv);

    return $elChk
  }//fin definicón de MBSwitch
}(jQuery));