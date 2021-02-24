$(document).ready(function() {
    var juego;

    function inicio() {
        juego = new Juego();
    }

    $('#repartir').click(function () {
        juego.repartir();
        console.log(juego.jugadores);
        console.log(juego.mazo.cartas);
    });

    inicio();
});
