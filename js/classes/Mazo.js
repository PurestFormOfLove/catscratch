class Mazo {
    constructor() {
        this.cartas = [];
        this.tipos = [
            {
                tipo: 'normal',
                cantidad: 16,
                valor: 1
            },
            {
                tipo: 'semirara',
                cantidad: 12,
                valor: 2
            },
            {
                tipo: 'rara',
                cantidad: 8,
                valor: 3
            },
            {
                tipo: 'color1',
                cantidad: 4,
                valor: 2
            },
            {
                tipo: 'color2',
                cantidad: 4,
                valor: 3
            },
            {
                tipo: 'color3',
                cantidad: 4,
                valor: 4
            },
        ];
        this.crearMazo();
        this.shuffle();
    }

    crearMazo() {
        for (const tipo of this.tipos) {
            for (let i = 0; i < tipo.cantidad; i++) {
                this.cartas.push(new Carta(tipo.tipo, tipo.valor))
            }
        }
    }

    shuffle() {
        var m = this.cartas.length;
        var t, i;

        while (m) {
            i = Math.floor(Math.random() * m--);
            t = this.cartas[m];
            this.cartas[m] = this.cartas[i];
            this.cartas[i] = t;
        }
    }

    tomarCarta() {
        return this.cartas.pop();
    }
}
