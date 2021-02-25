$(document).ready(function() {
    var juego;
    var botonTerminarTurno = "#terminar-turno";
    var botonRepartir = "#repartir";

    function inicio() {
        juego = new Juego();
        empezarRonda();
    }

    $(botonRepartir).click(function () {
        jugarRonda();
    });

    $(botonTerminarTurno).click(function () {
        terminarRonda();
        if (juego.hayGanador()) {
            deshabilitarJuego();
        } else {
            empezarRonda();
        }
    });

    function empezarRonda() {
        juego.limpiarManos();
        habilitarBotonRepartir();
        deshabilitarBotonTerminarTurno();
    }

    function jugarRonda() {
        juego.repartir();
        juego.dibujarPuntos();
        juego.dibujarTablero();
        deshabilitarBotonRepartir();
        habilitarBotonTerminarTurno();
    }

    function terminarRonda() {
        juego.contarPuntos();
        juego.otorgarRonda();
        juego.dibujarResultadosRonda();
        juego.reiniciarPuntos();
    }

    function deshabilitarBotonRepartir() {
        $(botonRepartir).attr('disabled', true);
    }

    function habilitarBotonRepartir() {
        $(botonRepartir).removeAttr('disabled');
    }

    function deshabilitarBotonTerminarTurno() {
        $(botonTerminarTurno).attr('disabled', true);
    }

    function habilitarBotonTerminarTurno() {
        $(botonTerminarTurno).removeAttr('disabled');
    }

    function deshabilitarJuego() {
        deshabilitarBotonRepartir();
        deshabilitarBotonTerminarTurno();
    }

    inicio();
});
