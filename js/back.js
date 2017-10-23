
$(function(){

var clientes = ["Céspedes 2670.", "Céspedes 2685.", "Stud mont blanc hipódromo Palermo.", "Club house country boca raton.", "Fabric sushi moreno.", "Oliden 1245." ,"Panatel S.A.", "Organización los andes.", "Adminitraciones del sur."]

  if ($(window).width() > 768) {
      var header = document.getElementById('nav-principal');
      var headroom = new Headroom(header);
      headroom.init();
  
    } else {
      $('.nav-principal').css('top', '0');
      $("#lista-segunda").hide();
      for (var i = 0; i < clientes.length; i++) {
        clientes[i]
        $("#lista-primera").append($("<li>").text(clientes[i]));
      }
      $("#lista-primera").css("line-height","23px");

  }



$(".btn").click(function() {
 
  validateForm();
});
  function validateForm()
    {
        var a=document.forms["Form"]["nombre"].value;
        var b=document.forms["Form"]["email"].value;
        var c=document.forms["Form"]["mensaje"].value;
        
        if ( a=="" && b=="" && c=="")
        {
            alert("Please Fill All Required Field");
            return false;
        } else {
          $( ".mensaje-enviado" ).show(1000);
   
        $(".mensaje-enviado").delay(2000).fadeOut('slow');
   $( '.mensaje-enviado' ).hide(3000);
    document.getElementsByClassName("form-control").value = "";
   
        }
    }
var ancho = $(window).width(),
 enlaces = $('#nav'),
   btnMenu = $(".icono"),
   icono = $('#btn-menu .icono');
   li = $(".element");
  if(ancho < 768){
   enlaces.hide();
   icono.addClass('fa-bars');

  }
// $('#needs-validation').submit(function() {
  
//      $(".mensaje-enviado").text("Su mensaje ha sido enviado correctamente.");

  
//    return false;

// });

  btnMenu.on('click', function(e){
   // $(".enlaces").parent().toggleClass('active');  

   enlaces.slideToggle();
   li.on('click',function(e){
    enlaces.hide();
    icono.addClass('fa-bars');
      icono.removeClass('fa-times');
   });
   if ($(this).hasClass("fa-bars")) {
    icono.addClass('fa-times');
      icono.removeClass('fa-bars');
    } else {
      icono.addClass('fa-bars');
      icono.removeClass('fa-times');
    }
   

  });


  $(window).on('resize', function(){
    if($(this).width() > 768){
      enlaces.show();
      icono.addClass('fa-times');
      icono.removeClass('fa-bars');
    } else {
      enlaces.hide();
      icono.addClass('fa-bars');
      icono.removeClass('fa-times');


    }
   });

});﻿

$(window).on('resize', function(){ 
   if($(this).width() < 1200){ 
    $(".div-izquierdo").insertAfter(".div-derecho");
   } else {
     $(".div-derecho").insertAfter(".div-izquierdo");
   }

});



$(window).scroll(function(e) {
      enlaces.hide();
      icono.addClass('fa-bars');
      icono.removeClass('fa-times');
if ($('enlaces:visible')) {
enlaces.hide();
}

});

var scrollEventHandler = function()
{
  window.scroll(0, window.pageYOffset)
}

window.addEventListener("scroll", scrollEventHandler, false);

var $root = $('html, body');

$('a[href^="#"]').click(function() {
    var href = $.attr(this, 'href');

    $root.animate({

        scrollTop: $(href).offset().top
    }, 420, function () {
        window.location.hash = href;

    });

    return false;
});

$('.carousel').carousel({
   interval: 2900
  });


(function($) {
    "use strict";

    var $navbar = $("#nav-principal"),
        y_pos = $navbar.offset().top,
        height = $navbar.height();

    $(document).scroll(function() {
        var scrollTop = $(this).scrollTop();

        if (scrollTop > y_pos + height) {
            $navbar.addClass("navbar-fixed").animate({
                top: 0
            });
        } else if (scrollTop <= y_pos) {
            $navbar.removeClass("navbar-fixed").clearQueue().animate({
                top: "-48px"
            }, 0);
        }
    });

})(jQuery, undefined);
