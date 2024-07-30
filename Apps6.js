let readline = require('readline')
let rl= readline.createInterface(
    process.stdin,
    process.stdout
)

rl.question('Ingrese una cadena: ', (cadena) => {
    rl.question('Ingrese el índice inicial: ', (inicio) => {
        rl.question('Ingrese el índice final: ', (final) => {
            const subcadena = cadena.substring(parseInt(inicio), parseInt(final))
            console.log(`La subcadena es: ${subcadena}`)
            process.exit()
        })
    })
})