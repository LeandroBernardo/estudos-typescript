/**
 * enums: Estruturas de dados com valores pré definidos
 */

// Situação 1
enum Cor {
    Cinza, //0
    Verde, //1
    Azul   //2
}
let minhaCor: Cor = Cor.Verde
console.log(minhaCor) //1



// Situação 2
enum OutrasCores {
    Rosa = 100,
    Amarelo = 200,
}

console.log(OutrasCores.Rosa) //100
console.log(OutrasCores.Amarelo) //200