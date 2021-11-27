//********************************************************************************* */
//tipos explícitos

/** Primeira situação
 * - Quando a variável aceita qualquer tipo (any)
 */
let minhaIdade: any
minhaIdade = 27
console.log(typeof (minhaIdade)) //number

minhaIdade = '27'
console.log(typeof (minhaIdade)) //string

/** Segunda situação
 * - Quando a variável aceita um determinado tipo  */

let minhaIdadeTipada: number
minhaIdadeTipada = 27
console.log(typeof (minhaIdade)) //number

//minhaIdadeTipada = '27' - Type 'string' is not assignable to type 'number'.

//********************************************************************************* */

