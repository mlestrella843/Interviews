//* Metodos y el objeto THIS

var nombre = "Josefina ALvarez"; //* esta variable nombre, en el contexto global no es la misma 
//* que la del objeto, aunque tengan el mismo nomnbre.

var persona = {
    nombre: "Maria",
    apellido: "Dubon",
    imprimirNombre: function(){
        // console.log("Nombre completo");
        console.log(this); //* el this me muestra el objeto a que hace referencia. 
        console.log( this.nombre + " " + this.apellido ); //* con el this podemos accesar a cada atributo del objeto.
    }
};
persona.imprimirNombre();
