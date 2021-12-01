//Função anônima
const somaAnonima = function (n1: number, n2: number): number {
    return n1 + n2
}

console.log(somaAnonima(10, 20))


//Função com nome para
function somaComNome(n1: number, n2: number): number {
    return n1 + n2
}
console.log(somaComNome(20, 20))

//Arrow Function
//Sintaxe reduzida com return implicito
const subtrairArrow = (n1: number, n2: number): number => n1 - n2
console.log(subtrairArrow(120, 20))

//Retorno explicito 
const fazerContaArrow = (n1: number, n2: number): any => {
    const valor = n1 * n2
    return console.log(valor)
}
fazerContaArrow(10, 60)

//Outros exemplos de arrow function
const saudacao = () => console.log('Ola');
saudacao()

const falarCom = (pessoa: string) => console.log(`Olá ${pessoa}`)
falarCom('Leandro')