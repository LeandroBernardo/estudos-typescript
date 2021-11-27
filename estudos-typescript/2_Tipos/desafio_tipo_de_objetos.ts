/**
 * Criar um objeto funcionário com:
 *  - Array de strings como os nomes de supervisores;
 *  - Função de bater ponto que recebe a hora (número)
 *    e retorna uma string 
 *    -> Ponto normal (<= 8)
 *    -> Fora do horário (> 8)  
 */


let funcionario: {
    supervisores: string[],
    baterPonto: (horas: number) => string
} = {
    supervisores: ['Joaquim', 'Alberto'],
    baterPonto(horas: number): string {
        if (horas <= 8) {
            return 'Ponto Normal'
        } else {
            return 'Fora do Horário!'
        }
    }
}

console.log(funcionario.supervisores)
console.log(funcionario.baterPonto(9))