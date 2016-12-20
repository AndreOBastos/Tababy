/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
$(document).ready(function(e) {
    
    $("textarea").keyup(updateCount);
    $("textarea").keydown(updateCount);
    $("textarea").on('input', updateCount);

    function updateCount() {
        var cs = "Número de caracteres restantes: " + [500 - $(this).val().length];
        $("#caracteres").text(cs);
    }
    
    if ( $(window).width() <= 540) {
        $("#recaptcha").css({"transform":"scale(0.6)", "-webkit-transform":"scale(0.6)", "transform-origin":"0 0", "-webkit-transform-origin":"0 0"});
    }
    
});

function habilitarBotao() {
        $("#submitButton").prop('disabled', false);
        $("#submitButton").attr('data-toggle','');
        $("#submitButton").attr('title','');
        $("#submitButton").attr('data-placement','');
    }