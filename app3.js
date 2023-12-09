//* PASO POR VALOR = SE ASIGNA LA DIRECCION DE MEMORIA DE ESA VARIABLE.
//* Paso por valor, los valores se asumen en su asignacion, y son independientes uno del otro.
var a = 10;
var b = a;

console.log("a:", a);
console.log("b:", b);

a = 20;

console.log("a:", a);
console.log("b:", b); // Aqui b se queda con el mismo valor que a tenia al principio, b = 10;

//* PASO POR REFERENCIA = SE ASIGNA LA DIRECCION DE MEMORIA A OTRA VARIABLE. 
//* Paso por Referencia. Los valores de las variables estan atados, porque apuntan al mismo lugar de memoria.
//* En el momento que se hace la asignacion d = c, d esta asumiendo el lugar d memoria que tiene c, por lo tanto
//* d tendra el valor que tenga c, y viceversa.
var c = {
    nombre: "Juana"
}
var d = c;
// console.log("c:", c);
// console.log("d:", d);

// c.nombre = "Pedro";
// console.log("c:", c);
// console.log("d:", d);

// d.nombre = "Maria";
// console.log("c:", c);
// console.log("d:", d);