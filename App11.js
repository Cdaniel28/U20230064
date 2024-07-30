let readline = require('readline')
let rl= readline.createInterface(
    process.stdin,
    process.stdout
)

rl.question('Ingrese una frase: ', (frase) => {
    let palabras = frase.split(' ');
    for (let i = 0; i < palabras.length; i++) {
        palabras[i] = palabras[i].charAt(0).toUpperCase() + palabras[i].slice(1).toLowerCase()
    }
    let fraseCapitalizada = palabras.join(' ')
    console.log(`La frase con la primera letra de cada palabra capitalizada es: ${fraseCapitalizada}`)
    process.exit()
})