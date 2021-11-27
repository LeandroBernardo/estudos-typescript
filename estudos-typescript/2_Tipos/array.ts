//array

let hobbies = ['cantar', 'dançar']
console.log(hobbies)

/**
 * Ao tentar reatribuir os valores da array hobies, dá erro pois de forma implicita o array está recebendo apenas strings
 */
//hobbies = [100, 200] - Type 'number' is not assignable to type 'string'.

/**
 * Para alterar o cenário acima, podemos fazer a tipagem do array para que aceite qualquer valor (any), conforme abaixo
 */

let hobbiesTipados: any[] = ['ler', 'ver series']
console.log(hobbiesTipados)
hobbiesTipados = [100, 200, 300]
console.log(hobbiesTipados)