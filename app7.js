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

