function verificarNumero(numero) {
    return new Promise((resolve, reject) => {
      if (numero === 5) {
        resolve("El número es 5");
      } else {
        reject("El número no es 5");
      }
    });
  }
  
  verificarNumero(5)
    .then(console.log)
    .catch(console.error);
  
  verificarNumero(3)
    .then(console.log)
    .catch(console.error);
  