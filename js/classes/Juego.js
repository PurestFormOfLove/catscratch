class Juego {
    constructor() {
        this.jugadores = {
            jugador1: new Jugador('jugador1'),
            computadora: new Jugador('computadora'),
        }
        this.mazo = new Mazo()
        this.cartasEnMano = 5
        this.PuntosP1 = 0
        this.PuntosCOM = 0
    }

    repartir() {
        for (let i = 0; i < this.cartasEnMano; i++) {
            this.jugadores.jugador1.adicionarCarta(this.mazo.tomarCarta())
            this.jugadores.computadora.adicionarCarta(this.mazo.tomarCarta())
        }
        this.dibujarCartasJugador();
        this.dibujarCartasComputadora();
    }

    dibujarCartasJugador() {
        let html = [];
        for (const carta of this.jugadores.jugador1.cartas) {
            html.push($(
                `<div class="column pc">
                    <img src="img/${carta.tipo}.png" width="130" height="200"/>
                </div>`
            ));
        }
        $("#cartas-jugador").html();
        $("#cartas-jugador").append(html);
    }

    dibujarCartasComputadora() {
        let html = [];
        for (const carta of this.jugadores.computadora.cartas) {
            html.push($(
                `<div class="column pc">
                    <img src="img/${carta.tipo}.png" width="130" height="200"/>
                </div>`
            ));
        }
        $("#cartas-computadora").html();
        $("#cartas-computadora").append(html);
    }
}
