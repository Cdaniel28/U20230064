let readline = require('readline')
let rl= readline.createInterface(
    process.stdin,
    process.stdout
)

rl.question('Ingrese una frase: ', (frase) => {
    rl.question('Palabra a reemplazar: ', (palabraAntigua) => {
        rl.question('Nueva palabra: ', (nuevaPalabra) => {
            const regex = new RegExp(`\\b${palabraAntigua}\\b`, 'gi')
            const nuevaFrase = frase.replace(regex, nuevaPalabra)
            console.log(`Resultado: ${nuevaFrase}`)
            process.exit()
        })
    })
})