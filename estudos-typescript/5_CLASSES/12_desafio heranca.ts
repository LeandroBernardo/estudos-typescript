// Exercício 2 - Herança
abstract class Objeto2D {
    constructor(public base: number = 0, public altura: number = 0) {

    }

    abstract area(): number
}

class Retangulo extends Objeto2D {
    area(): number {
        return this.base * this.altura
    }
}

const retangulo = new Retangulo(5, 7)
retangulo.base = 10
// retangulo.altura = 7
console.log(retangulo.area())
