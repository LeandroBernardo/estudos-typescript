class Unico {
    private static instance: Unico = new Unico
    private constructor() { }

    static getInstance(): Unico {
        return Unico.instance
    }

    agora() {
        return new Date
    }
}

// const errado = new Unico()
console.log(Unico.getInstance().agora())