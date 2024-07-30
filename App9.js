let readline = require('readline')
let rl= readline.createInterface(
    process.stdin,
    process.stdout
)

rl.question('Ingrese una palabra: ', (palabra) => {
    const palabraLimpia = palabra.toLowerCase().replace(/\s+/g, '')
    const palabraInvertida = palabraLimpia.split('').reverse().join('')
    if (palabraLimpia === palabraInvertida) {
        console.log('La palabra es un palíndromo')
    } else {
        console.log('La palabra no es un palíndromo')
    }
    process.exit()
})