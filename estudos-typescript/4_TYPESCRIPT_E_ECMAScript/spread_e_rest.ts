/**
 * Spread Operator
 */

const numbers = [1, 10, 99, -55]
//Qual é o maior numero da array numbers?

//Primeira forma de obter o maior numero da array
console.log(Math.max(numbers[0], numbers[1], numbers[2], numbers[3])) // A função Math não aceita a array diretamente como parâmetro

//Segunda forma de obter o maior numero da array - Utilizando o Spread
console.log(Math.max(...numbers))


/**
 * Spread Operator - Outro exemplo
 */

const turmaA: string[] = ['Maria', 'Felipe', 'Alberto']
const turmaB: string[] = ['Elis', 'Rosa', 'Mauricio']

const turmaGeral: string[] = [...turmaA, ...turmaB]

console.log(turmaGeral)

/**
 * Rest
 */
function retonarArray(...args: number[]): number[] {
    return args
}

const numeros = retonarArray(1, 2, 3, 4, 5, 10, 11, 32)
console.log(numeros)

/**
 * Rest - Outro exemplo
 */
function somarNumerosSemLimite(...args: number[]): number {
    return args.reduce((total, args) => total + args)
}

console.log(somarNumerosSemLimite(10, 20, 30, 40))

