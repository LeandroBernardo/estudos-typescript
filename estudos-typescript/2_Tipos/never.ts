//Never: Quando determinada função vai terminar em erro ou loop sem retorno
//Conceito de never é um pouco confuso 
//https://medium.com/xp-inc/typescript-conhecendo-o-type-never-aa88cc0a3b7a

function falha(msg: string): never {
    throw new Error(msg);
}

falha('Teste')