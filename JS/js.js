$(function () {
    $('#menu .navbar-toggler').click(function () {
        $('.boton-menu').toggleClass('icono-cerrar');
    });

    /*al hacer click sobre el boton*/
    $('#menu .navbar-nav a').click(function () {
        //quita la class iconno cerrar
        $('.boton-menu').removeClass('icono-cerrar');
        //contraer el menu
        $('#menu .navbar-collapse').collapse('hide');
    });

});
