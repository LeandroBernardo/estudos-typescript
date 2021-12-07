class Matematica {
    static PI: number = 3.1416

    static areaCirc(raio: number): number {
        return this.PI * raio * raio
    }
}

console.log(Matematica.areaCirc(4))
//Com membros static não há necessidade de instanciar um objeto, no caso, podemos acessar diretamente