function esImpar(numero) {
    return numero % 2 !== 0;
}

let numero = 8;

if (esImpar(numero)) {
    console.log("El número es impar");
} else {
    console.log("El número es par");
}