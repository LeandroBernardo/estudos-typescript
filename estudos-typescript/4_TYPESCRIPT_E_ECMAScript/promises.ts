//Callback

function esperar3Segundos() {
    setTimeout(() => {
        console.log('3s depois...')
    }, 3000)
}

esperar3Segundos()


//Promise
function esperar3SegundosPromise() {
    return new Promise((resolve: any) => {
        setTimeout(() => {
            resolve('3s depois Promisse...')
        }, 3000)
    })
}

esperar3SegundosPromise().then(response => console.log(response))
