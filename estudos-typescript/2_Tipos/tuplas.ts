/**
 * Tuplas: são arrays com posições de tipagens pré definidas
 */

//No caso abaixo, o array de endereços não recebe uma tipagem pré definida, nesse caso não ocorre erro
let endereco = ['Av Paulista', 10]

//No caso abaixo, o array se transforma em tupla pois as posições são previamente definidas. 
let enderecoTipado: [string, number] = ['Av Paulista', 20]
//Caso alterado os valores e tipagens, ocorre erro
// enderecoTipado = [10, 'Av Paulista'] - descomentando a linha, cada posição apresenta um erro



