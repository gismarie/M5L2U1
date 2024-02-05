let obj ={};
let obje = new Object();
/**
 * new Array ; []
 * new string (); "" ''  ´´
 * new Numbrer(); 12
 * New Boolean (); treue o false
 */

function Usuario() {
    this.user = 'el loroo pelado';
}
let user = new Usuario ();
console.log(user.constructor);


// comparacion 
const s1 = "1+1";
const s2 = new String("1+1");
console.log(s2.valueOf());

