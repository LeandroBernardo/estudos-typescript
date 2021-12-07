class Data {
    //Público por padrão
    dia: number
    mes: number
    ano: number

    constructor(dia: number, mes: number, ano: number) {
        this.dia = dia
        this.mes = mes
        this.ano = ano
    }
}

const aniversario = new Data(3, 11, 1991)
console.log(aniversario)