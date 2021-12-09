class Aviao {
    public readonly modelo: string

    constructor(modelo: string, public readonly prefixo: string) {
        this.modelo = modelo
    }
}

const turboHelice = new Aviao('Tu-114', 'PT-ABC')

//Cannot assign to 'modelo' because it is a read-only property
//turboHelice.modelo = 'DC-8'
// turboHelice.prefixo = PT-DEF'

console.log(turboHelice)