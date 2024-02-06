const meses = ['enero', 'febrero', 'marzo', 'abril', 'mayo', 'junio', 'julio', 'agosto', 'setiembre',
 'octubre', 'noviembre', 'diciembre'];

// Filtrar meses de la const meses con más de 7 letras y convertir a mayúsculas
const mesesMasDe7LetrasMayusculas = meses
  .filter(mes => mes.length > 7)
  .map(mes => mes.toUpperCase());

// Contar cuántos meses hay en el nuevo array
const cantidadMeses = mesesMasDe7LetrasMayusculas.length;

console.log("Meses con más de 7 letras en mayúsculas:", mesesMasDe7LetrasMayusculas);
console.log("Cantidad de meses en el nuevo array:", cantidadMeses);


