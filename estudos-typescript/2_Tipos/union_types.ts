//Union types - Permite ter flexibilidade de tipos em uma determinada variável
// Diferente de usar any que aceita tudo, o union types restringe aos tipos pré determinados, no exemplo abaixo
// a variável aceita o tipo string ou number

let nota: number | string = 10;
nota = 10
console.log(`Minha nota é ${nota}`)

nota = '10'
console.log(`Minha nota é ${nota}`)

//nota = false - Type 'boolean' is not assignable to type 'string | number'

