type ContaBancaria = {
    saldo: number,
    depositar: (valor: number) => void
    // depositar(valor: number): void
}

let correntista: { nome: string, contaBancaria: ContaBancaria, contatos: string[] } = {
    nome: 'Ana Silva',
    contaBancaria: {
        saldo: 3456,
        depositar(valor: number) {
            this.saldo += valor
        }
    },
    contatos: ['34567890', '98765432']
}

correntista.contaBancaria.depositar(3000)
console.log(correntista)