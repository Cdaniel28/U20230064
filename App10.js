let readline = require('readline')
let rl= readline.createInterface(
    process.stdin,
    process.stdout
)

rl.question('Ingrese una palabra: ', (palabra) => {
    const vocales = 'aeiouAEIOU'
    let contadorVocales = 0

    for (let char of palabra) {
        if (vocales.includes(char)) {
            contadorVocales++
        }
    }

    console.log(`El número de vocales en la palabra es: ${contadorVocales}`)
    process.exit()
})