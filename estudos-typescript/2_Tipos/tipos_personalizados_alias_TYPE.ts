//type

type Funcionario = {
    supervisores: string[],
    baterPonto: (horas: number) => string

}

let func: Funcionario = {
    supervisores: ['Ana', 'Joaquim'],
    baterPonto(horas: number): string {
        if (horas <= 8) {
            return 'Ponto Normal'
        } else {
            return 'Fora do Horário!'
        }
    }
}

console.log(func.supervisores)
console.log(func.baterPonto(12))
