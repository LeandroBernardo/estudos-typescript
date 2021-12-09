abstract class Calculo {
    protected resultado: number = 0;

    abstract executar(...numeros: number[]): void

    getResultado(): number {
        return this.resultado
    }
}

class Soma extends Calculo {
    executar(...numeros: number[]): void {
        this.resultado = numeros.reduce((acc, curr) => {
            return acc + curr
        })
    }
}

class Multiplica extends Calculo {
    executar(...numeros: number[]): void {
        this.resultado = numeros.reduce((acc, curr) => {
            return acc * curr
        })
    }
}

const calc1 = new Soma()
calc1.executar(2, 3, 4, 5)
console.log(calc1.getResultado())

const calc2 = new Multiplica()
calc2.executar(2, 3, 4, 5)
console.log(calc2.getResultado())