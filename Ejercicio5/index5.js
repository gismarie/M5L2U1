//la asignacion  de la letra del DNI implica una relación entre:
// (i)  el resto de la división entre el número del DNI  el número 23 
// y (ii) un arreglo de letras

// el Array de letras es el siguiente y se asignará una letra desde el numero 0 hasta el valor 22
// se usa let para la variable letras del DNI 
let letrasDNI = ['T', 'R', 'W', 'A', 'G', 'M', 'Y', 'F', 'P', 'D', 'X', 'B', 'N', 'J', 'Z', 'S', 'Q', 'V', 'H', 'L', 'C', 'K', 'E', 'T'];
console.log(letrasDNI.length);

// Pedir al usuario que escriba su número de DNI 
// con la funcion prompt()
let numeroDNI = prompt("Digite su número de DNI sin letra");


// sumar cada número de la cedula y devolver un numero entero
numeroEnteroDNI = parseInt(numeroDNI);


// Comprobar si el número es válido
if (numeroDNI < 0 || numeroDNI > 99999999 || isNaN(numeroDNI)) {
    alert("El número de DNI proporcionado  es inválido.");
} else {
    // calcular el resto de la division entre l numero de DNI y 23 
    //Calcular la letra del DNI
   let resto = numeroDNI % 23;
   let letraDNI = letrasDNI[resto];

    // Mostrar la letra del DNI
    alert("La letra del DNI es: " + letraDNI);
}
