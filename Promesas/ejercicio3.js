function enviarCorreo(direccion) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (direccion) {
          resolve(`Correo enviado a ${direccion}`);
        } else {
          reject("Dirección de correo no proporcionada");
        }
      }, 2000);
    });
  }
  
  enviarCorreo("ejemplo@dominio.com")
    .then(console.log)
    .catch(console.error);
  
  enviarCorreo("")
    .then(console.log)
    .catch(console.error);