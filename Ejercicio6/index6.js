const notas = [6, 7, 2, 9, 3, 4, 5, 8, 2]
// es la var externa suma Final se irrá llenando el valor 
let sumaFinal = 0;
// for desde I=0 hasta i= debe recorrer todo el largo del arreglo
//e ir incrementandose
for (let i = 0; 
    i < notas.length; i++) {
    sumaFinal +=  notas[i];
}

console.log("La suma Final del arreglo notas empleando for  es :" + sumaFinal);
