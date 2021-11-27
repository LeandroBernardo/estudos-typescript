//Checando tipagem no javascript, ou seja, sem a utilização de tipagem explicita para a variável
// O recurso abaixo é utilizado mundo javascript quando preciso testar a tipagem do retorno 

const valor = 10;
// const valor = '10';
// const valor = true;

if (typeof (valor) === "number") {
    console.log(`Tipagem: number`)
} else {
    console.log(`Tipagem: ${typeof (valor)}`)
}