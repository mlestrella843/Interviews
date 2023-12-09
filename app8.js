//* Funciones de primera clase
//* A las funciones de primera clase se le pueden agregar propiedades o sobreescribirlas.
//* Aqui comprobamos que las funciones son objetos.

function a(){
    console.log("Funcion A");
}
a();

a.nombre = "Maria";
a.direccion = {
    pais: "Republica Dominicana",
    ciudad: "Santiago",
    edificio:{
        piso: "8vo",
        nombre: "Simon III"
    }
}