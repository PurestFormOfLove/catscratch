class Juego {
    constructor() {
        this.jugadores = {
            jugador1: new Jugador('jugador1'),
            computadora: new Jugador('computadora'),
        }
        this.mazo = new Mazo()
        this.cartasEnMano = 5
        this.divJugador = '#cartas-jugador';
        this.divComputadora = '#cartas-computadora';
        this.rondasComputadora = 0;
        this.rondasJugador1 = 0;
        this.puntosJugador1 = 0;
        this.puntosComputadora = 0;

        this.spanPuntajeComputadora = "#puntaje-computadora";
        this.spanPuntajeJugador = "#puntaje-jugador";
        this.spanRondasComputadora = "#rondas-computadora";
        this.spanRondasJugador = "#rondas-jugador";
    }

    nuevoMazo() {
        this.mazo.nuevoMazo()
    }

    repartir() {
        if (this.mazo.cartas.length < 10) {
            this.nuevoMazo();
        }
        for (let i = 0; i < this.cartasEnMano; i++) {
            this.jugadores.jugador1.adicionarCarta(this.mazo.tomarCarta())
            this.jugadores.computadora.adicionarCarta(this.mazo.tomarCarta())
        }
    }

    dibujarTablero() {
        this.dibujarCartasJugador()
        this.dibujarCartasComputadora()
    }

    dibujarCartasJugador() {
        this.dibujarCartas(this.divJugador, this.jugadores.jugador1);
    }

    dibujarCartasComputadora() {
        this.dibujarCartas(this.divComputadora, this.jugadores.computadora);
    }

    dibujarCartas(div, jugador) {
        let html = [];
        for (const carta of jugador.cartas) {
            html.push($(
                `<div class="column pc">
                    <img src="img/${carta.tipo}.png" width="130" height="200"/>
                </div>`
            ));
        }
        $(div).empty();
        $(div).append(html);
    }

    contarPuntos() {
        this.puntosJugador1 = this.contarPuntosJugador(this.jugadores.jugador1);
        this.puntosComputadora = this.contarPuntosJugador(this.jugadores.computadora);
    }

    contarPuntosJugador(jugador) {
        let puntos = 0;
        for (let i = 0; i < jugador.cartas.length; i++) {
            puntos += jugador.cartas[0].valor
        }
        return puntos;
    }

    otorgarRonda() {
        if (this.puntosJugador1 > this.puntosComputadora) {
            this.rondasJugador1++;
        } else if (this.puntosComputadora > this.puntosJugador1)  {
            this.rondasComputadora++;
        }
    }

    reiniciarPuntos() {
        this.puntosJugador1 = 0;
        this.puntosComputadora = 0;
    }

    dibujarResultadosRonda() {
        this.dibujarPuntos();
        this.dibujarRondas();
        $(this.spanPuntajeComputadora).html(this.puntosComputadora);
        $(this.spanPuntajeJugador).html(this.puntosJugador1);
    }

    dibujarPuntos() {
        $(this.spanPuntajeComputadora).html(this.puntosComputadora);
        $(this.spanPuntajeJugador).html(this.puntosJugador1);
    }

    dibujarRondas() {
        $(this.spanRondasComputadora).html(this.rondasComputadora);
        $(this.spanRondasJugador).html(this.rondasJugador1);
    }

    limpiarManos() {
        this.jugadores.jugador1.limpiarMano();
        this.jugadores.computadora.limpiarMano();
    }

    hayGanador() {
        if (this.rondasComputadora === 3) {
            alert('La computadora ha ganado');
            return true;
        } else if (this.rondasJugador1 === 3) {
            alert('El jugador a ganado')
            return true;
        }
        return false;
    }
}
