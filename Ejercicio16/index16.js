class Cuadrado {
    constructor(lado) {
      this.lado = lado;
    }
  
    calcularArea() {
      return this.lado * this.lado;
    }
  
    calcularPerimetro() {
      return 4 * this.lado;
    }
  
    mostrarResultados() {
      console.log(`Cuadrado con lado ${this.lado} cm:`);
      console.log(`Área: ${this.calcularArea()} cm²`);
      console.log(`Perímetro: ${this.calcularPerimetro()} cm`);
      console.log('------------------------');
    }
  }
  
  // Crear instancias para cuadrados de diferentes tamaños
  const cuadradoPequeno = new Cuadrado(2);
  const cuadradoMediano = new Cuadrado(5);
  const cuadradoGrande = new Cuadrado(10);
  
  // Mostrar resultados por consola
  cuadradoPequeno.mostrarResultados();
  cuadradoMediano.mostrarResultados();
  cuadradoGrande.mostrarResultados();
  