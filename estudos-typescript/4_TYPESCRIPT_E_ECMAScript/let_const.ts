/**
 * let tem escopo de bloqco
 */

let estaFrio = true;

if (estaFrio) {
    let acao = 'Colocar o casaco'
    console.log(acao);
}
//console.log(acao); error TS2304: Cannot find name 'acao'.




/**
 * const não pode receber atribuição
*/

const cpf: string = '128.561.151-18'
//cpf = '185.999.948-20' error TS2588: Cannot assign to 'cpf' because it is a constant.
console.log(cpf)