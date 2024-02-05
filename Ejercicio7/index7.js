function sumaNumerosPares(inicio, fin) {
    let sumaPares = 0;
  
    for (let i = 1; i <= 15; i++) {
      if (i % 2 == 0) {
        sumaPares += i;
      }
    }
      return sumaPares;
  }
    //  rango de datos desde  1 a 15
  const resultado = sumaNumerosPares(1, 15);
  console.log(resultado); 
  