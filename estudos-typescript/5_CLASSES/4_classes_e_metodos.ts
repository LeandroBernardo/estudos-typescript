class Product {
    constructor(public name: string, public description: string, public price: number, public discount: number = 0) {
    }

    public discountPrice(): string {
        const priceWithDiscount = this.price * (1 - this.discount)
        return priceWithDiscount.toFixed(2)
    }

    public fullDescription(): string {
        return `Produto: ${this.name} - Descrição: ${this.description} - Preço ${this.price} - Preço com desconto: R$ ${this.discountPrice()}`
    }
}

const product1 = new Product('Lápis', 'Marca Bic Colors', 12.99)
console.log(product1.fullDescription())

const product2 = new Product('Lápis', 'Marca Bic Colors', 120.99, 0.05)
console.log(product2.fullDescription())