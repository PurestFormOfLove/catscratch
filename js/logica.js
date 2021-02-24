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

function show(shown, hidden) {
    document.getElementById(shown).style.display = 'block';
    document.getElementById(hidden).style.display = 'none';
    return false;
}
