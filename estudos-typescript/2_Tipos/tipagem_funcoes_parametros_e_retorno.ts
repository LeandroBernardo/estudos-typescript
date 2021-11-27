//Função com tipo de retorno específico


let meuNome: string = 'Leandro'
let minhaNovaIdade: number = 37

//Função com retorno do tipo string
// Quando tento retornar minhaIdadeNova, dá erro pois o tipo é diferente do apontado como retorno
function retornaMeuNome(): string {
    return meuNome
    // return minhaNovaIdade - Type 'number' is not assignable to type 'string'
}

console.log(retornaMeuNome())


//Função sem retorno
function digaOla(): void {
    console.log('Oi')
    // return minhaNovaIdade - Type 'number' is not assignable to type 'void'
}
digaOla()

//Atribuir tipo para parâmetros de uma função
function multiplicar(num1: number, num2: number): number {
    return num1 * num2
}

console.log(multiplicar(10, 20))
//console.log(multiplicar(10, '20')) - Argument of type 'string' is not assignable to parameter of type 'number'