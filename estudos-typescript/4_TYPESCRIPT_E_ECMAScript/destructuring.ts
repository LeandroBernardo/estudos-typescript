//Destructuring Array

//Exemplo 1
const caracteristicas = ['Motor Ford', 2022]
const [motor, ano] = caracteristicas

console.log(motor)
console.log(ano)

//Exemplo 2
const [num1, num2] = [10, 20]
console.log(num1)
console.log(num2)


//Destructuring Objetos
const item = {
    nomeSSD: 'SSD 480gb',
    precoSSD: 200
}

const nomeItem = item.nomeSSD
const precoItem = item.precoSSD

//ou
const { nomeSSD, precoSSD } = item
console.log(nomeSSD)
console.log(precoSSD)

