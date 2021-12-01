function contagemRegressiva(inicio: number = 3) {
    while (inicio > 0) {
        inicio--
        console.log(inicio)
    }
    console.log('Fim')
}

contagemRegressiva() //Chamando a função sem parâmetro, o valor default declarado na função é assumido

contagemRegressiva(20) //Chamando a função com parâmetro, o valor default é substituido pelo valor informado na chamada