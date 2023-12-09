//* Retorno de las funciones en Javascript
//* Pueden regresar: Un tipo Primitivo, un undefined, un objeto, o una funcion.
function obtenerAleatorio(){
    return Math.random();
}
console.log( obtenerAleatorio() );

function obtenerNombre(){
    return "Juan";
}
console.log( obtenerNombre() + " Padilla " );

function esMayor05(){
    if( obtenerAleatorio() > 0.5) {
        return true;
    }else{
        return false;
    }
}

//* Puedo hacer decisiones en base al resultado booleano de una funcion que devuelve un booleano
if( esMayor05() ){
    console.log(esMayor05());
    console.log("Es mayor a 0.5");
}else{
    console.log("Es menor a 0.5");
}

//* Funcion que regresa un objeto
function crearPersona( nombre, apellido ){
    return{ 
    nombre: nombre,
    apellido: apellido
    }
}
// console.log( crearPersona("Maria", "Paz") );
var persona = crearPersona( "Carla", "Jimenez"); 
console.log( persona );

//* Funcion que crea funcion
function creaFuncion(){
    return function(name){
        console.log("Me crearon!!!!" + name);
    }
}
var nuevaFuncion = creaFuncion(); //* Aqui nuevaFuncion tendra lo que retorna creaFuncion, este objeto solamemnte.
console.log(nuevaFuncion);
//* Por ello para que se ejecute correctamente hay que pasarle el parametro de un nombre.
nuevaFuncion( persona.nombre );

