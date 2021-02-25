class Jugador {
    constructor(nombre) {
        this.nombre = nombre,
        this.cartas = [];
    }

    adicionarCarta(carta) {
        this.cartas.push(carta)
    }

    limpiarMano() {
        this.cartas = [];
    }
}
