
function soma(numA: number, numB: number): number {
    return numA + numB
}

//Atribuindo uma função para uma variável
let somar: (value1: number, value2: number) => number

somar = soma

console.log(somar(10, 20))