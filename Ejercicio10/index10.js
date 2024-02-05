function esParOImpar(numero) {
    if (numero % 2 === 0) {
      return "El número es par.";
    } else {
      return "El número es impar.";
    }
  }
  
  // Ejemplo de uso
  const miNumero = -4;
  const resultado = esParOImpar(miNumero);
  
  console.log(resultado); // Esto imprimirá si el número es par o impar
  