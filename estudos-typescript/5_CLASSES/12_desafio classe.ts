// Exercício 1 - Classe
class Moto {
    public velocidade: number = 0

    constructor(public nome: string) {

    }

    buzinar() {
        console.log('Toooooooooot!')
    }

    acelerar(delta: number) {
        this.velocidade = this.velocidade + delta
    }
}

const moto = new Moto('Ducati')
moto.buzinar()
console.log(moto.velocidade)
moto.acelerar(30)
console.log(moto.velocidade)

