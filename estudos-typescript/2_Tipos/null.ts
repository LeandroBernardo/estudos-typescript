//null: permitir valores nulos na tipagem

type Contato = {
    nome: string,
    tel1: number,
    tel2: number | null
}

const lista: Contato = {
    nome: 'Leandro',
    tel1: 2458 - 2187,
    tel2: null
}

console.log(lista)