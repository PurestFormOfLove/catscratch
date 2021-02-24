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
    }

    repartir() {
        for (let i = 0; i < this.cartasEnMano; i++) {
            this.jugadores.jugador1.adicionarCarta(this.mazo.tomarCarta())
            this.jugadores.computadora.adicionarCarta(this.mazo.tomarCarta())
        }
        this.dibujarCartas(this.divJugador, this.jugadores.jugador1);
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
        $(div).html();
        $(div).append(html);
    }
}
