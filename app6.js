//* Parametros

function imprimir( fn ){
    fn();
}

var persona = {
    nombre:"Juan",
    apellido: "Perez"
}

imprimir( function(){
    console.log("Funcion anonima");
})

