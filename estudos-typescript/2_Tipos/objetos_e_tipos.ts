//Objetos E Tipos

let usuario: { nome: string, idade: number } = {
    nome: 'Leandro',
    idade: 37
};

console.log(usuario);

//Nova atribuição independe de ordem, porém necessidade dos atributos e tipos pré definidos no objeto
usuario = {
    idade: 10,
    nome: 'Felipe',
};

console.log(usuario)