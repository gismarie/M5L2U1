// Obtener referencia a los elementos
const btnGuardar = document.getElementById('btnGuardar');
const inputNombre = document.getElementById('inputNombre');
const inputLetra = document.getElementById('inputLetra');

// Asignar evento click al botón "Guardar"
btnGuardar.addEventListener('click', function() {
    alert('Guardado');
});

// Asignar eventos focus y blur al input "Nombre"
inputNombre.addEventListener('focus', function() {
    inputNombre.style.backgroundColor = 'yellow';
});

inputNombre.addEventListener('blur', function() {
    inputNombre.style.backgroundColor = '';
});

// Asignar evento input al input "Letra"
inputLetra.addEventListener('input', function() {
    const letra = inputLetra.value.toLowerCase();
    if (letra.match(/[aeiou]/)) {
        inputLetra.style.color = 'blue';
    } else {
        inputLetra.style.color = 'red';
    }
});
