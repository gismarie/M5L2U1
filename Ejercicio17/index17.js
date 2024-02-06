  //Con esta función obtenemos un array con //todos los elementos de la página
  // que tengan la etiqueta seleccionada.
 const enlaces = document.getElementsByTagName('a');
 const numeroEnlaces = enlaces.length;

 // Obtener la dirección del penúltimo enlace
 const penultimoEnlace = enlaces[numeroEnlaces - 2].getAttribute('href');

 // Obtener el tercer párrafo y contar los enlaces dentro de él
 //esta función busca en el documento el elemento con el valor 
//del identificador que le hayamos indicado. Tan solo obtendrá un elemento ya que, 
//como hemos comentado en lecciones anteriores, los identificadores han de ser únicos.
 const tercerParrafo = document.getElementById('third-paragraph');
 const enlacesTercerParrafo = tercerParrafo.getElementsByTagName('a').length;

 // Crear un nuevo elemento para mostrar la información
 const resultado = document.createElement('div');
 resultado.innerHTML = `
     <p>Número de enlaces de la página DOM: ${numeroEnlaces}</p>
     <p>Dirección del penúltimo enlace: ${penultimoEnlace}</p>
     <p>Número de enlaces del tercer párrafo: ${enlacesTercerParrafo}</p>
 `;

 // Agregar el resultado al final de la página
 document.body.appendChild(resultado);