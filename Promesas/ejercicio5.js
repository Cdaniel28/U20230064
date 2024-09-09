function verificarCodigoDescuento(codigo) {
    return new Promise((resolve, reject) => {
      if (codigo === "DESCUENTO2024") {
        resolve("Código de descuento válido");
      } else {
        reject("Código de descuento inválido");
      }
    });
  }
  
  verificarCodigoDescuento("DESCUENTO2024")
    .then(console.log)  .catch(console.error);
  
  verificarCodigoDescuento("OTROCODIGO")
    .then(console.log)
    .catch(console.error);
  