//const data =['hola', 2,5,'adios'];
//console.log(data);

// let a = 2
// let b = 5
// console.log(a>b);
// console.log(a>=b);

// console.log(a<b);
// console.log(a<=b);

// console.log(a===b);

// console.log(a+b, 'adiccion'); // adiccion
// console.log(a-b, 'resta'); // resta 
// console.log(a*b, 'multiplicacion'); // multilicacion 
// console.log(a/b,'division'); // division 
// console.log(a**b,'potencia'); //potencia a elevado a b

const data = ["hola", 2, 5, "adios"];

// 1ero. Filtrar los valores numéricos
const valoresNumericos = data.filter(elemento => typeof elemento === 'number');

// 2do. Realizar operaciones aritméticas con los valores numéricos
if (valoresNumericos.length > 0) {
  const suma = valoresNumericos.reduce((acumulador, elemento) => acumulador + elemento);
  const resta = valoresNumericos.reduce((acumulador, elemento) => acumulador - elemento);
  const multiplicacion = valoresNumericos.reduce((acumulador, elemento) => acumulador * elemento);
  const division = valoresNumericos.reduce((acumulador, elemento) => acumulador / elemento);
  const modulo = valoresNumericos.reduce((acumulador, elemento) => acumulador % elemento);
  const potencia = valoresNumericos.reduce((acumulador, elemento) => acumulador % elemento);

  console.log(`Suma: ${suma}`);
  console.log(`Resta: ${resta}`);
  console.log(`Multiplicación: ${multiplicacion}`);
  console.log(`División: ${division}`);
  console.log(`Módulo: ${modulo}`);
  
} else {
  console.log("No hay valores numéricos en el arreglo.");
}

