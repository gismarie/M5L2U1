function suprimirConsonantes(cadena) {
    
    const cadenaSinConsonantes = cadena.replace(/[bcdfghjklmnpqrstvwxyzBCDFGHJKLMNPQRSTVWXYZ]/g, '');
    
    return cadenaSinConsonantes;
  }
  
  // Ejemplo de uso
  const fraseOriginal = "ejercicio 8 hola mundo ";
  const resultado = suprimirConsonantes(fraseOriginal);
  
  console.log(resultado); 
  