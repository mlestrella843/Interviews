//* NOTACION DE PUNTOS: Cuando accesamos los atributos de un objeto por medio de puntos.
var persona = {
    nombre: "Juana",
    apellido: "Estrella",
    edad: 34,
    direccion: {
        calle: "Av. de la Constitución",
        pais: "republica Dominicana",
        edificio: {
            residencial: "Bolivar II",
            apto: "C-3"
        }
    }
};
// console.log(persona.direccion);
// console.log(persona.direccion.pais);

// persona.direccion.zipcode = 5001;

// console.log(persona.direccion);
// console.log(persona.direccion.edificio.apto);

//* A medida que crecen los objetos internos se puede crear el paso de valor por referencia como
//* En la clase pasada.
//* en caso de quisieramos agregar otra propiedad como numero de piso, podemos hacer los siguiente.

//* Para llegar al valor del edificio sin tener que estar escribiendo por puntos hacemos esto

var edificio = persona.direccion.edificio; //* Aqui le pasamos el lugar de memoria donde esta este objeto

console.log(edificio.residencial); //* Aqui vemos que ya con poner la variable edificio ya podemos accesar
                                    //* directamente las propiedades internas.
//* En caso de que queramos agregar otro atributo hacemos lo siguiente
edificio.nopiso = "8vo Piso";
//* Aqui comprobamos que se agrego el atributo de no de piso y que luego de sacarlo por consola aparece todo el objeto edificio.
console.log(edificio);

//* NOTACION CORCHETES

console.log( persona["nombre"] );
console.log( persona["direccion"]["pais"]);
console.log( persona["direccion"]["edificio"]);

//* Se usa mas para cuando estamos usando formularios por ejemplo, que podemos accesar o cambiar directamente un campo.

var campo = "edad" //* aqui vamos a cambiar el campo edad.

console.log( persona[campo] );