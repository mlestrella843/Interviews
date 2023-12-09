
var a = 30;

function primeraFucntion() {
    var a = 20;
    console.log( a );
}
primeraFucntion();

// function imprimir( nombre, apellido ) {
//     console.log( nombre + " " + apellido );
// }
// imprimir("Juan", "Estrella");
imprimir("Juan", "Padilla");
//* recordar que cuando la variable esta definida, tiene un espacio en memoria. Si no tiene valor asignado
//* saldra undefined.

function imprimir( nombre, apellido ) {

    apellido = apellido || "JJJ";

    // if(apellido === undefined ){
    //     // apellido = "XXX";
    // }
    console.log( nombre + " " + apellido );
}