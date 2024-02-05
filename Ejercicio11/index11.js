function analizarFrase() {
    const frase = prompt("ingresar frase:");

    if (frase === frase.toUpperCase()) {
      alert("La frase está escrita en MAYÚSCULAS.");
    } else if (frase === frase.toLowerCase()) {
      alert("La frase está escrita en minúsculas.");
    } else {
      alert("La frase está escrita en mayúsculas y minúsculas.");
    }
  }

  analizarFrase();