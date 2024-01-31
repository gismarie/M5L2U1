//alimentos
let tipo = "fruta";
let nombre = "banana";
let edadmaduracion = "2";

let alimento = {
    tipo: "fruta",
    nombre: 'banana',
    edadmaduracion: '2',
};

// maneras de ver las propiedades 
/* en la consola 
al escribir punto luego del objeto
con escribir con parentesis rectos
*/
console.log(alimento);
console.log(alimento.nombre);
console.log(alimento['nombre']);


delete alimento.edadmaduracion;
console.log(alimento);

