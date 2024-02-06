const numbers = [253, 8575, 1, 20, 562, 1233, 25, 27, 258, 254, 7485, 2683];

const numerosPares = numbers.filter(numero => numero % 2 === 0);
const numerosImpares = numbers.filter(numero => numero % 2 !== 0);

console.log("Números Pares:", numerosPares);
console.log("Números Impares:", numerosImpares);
