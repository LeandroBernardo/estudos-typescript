class Produto {
    public nome: string
    public preco: number
    public desconto: number

    constructor(nome: string, preco: number, desconto: number = 0) {
        this.nome = nome
        this.preco = preco
        this.desconto = desconto
    }
}

const produto1 = new Produto('Computador', 1000.00, 0.05)
console.log(produto1)
console.log(`Desconto: ${produto1.desconto * produto1.preco}`)

const produto2 = new Produto('Impressora', 620)
console.log(produto2)