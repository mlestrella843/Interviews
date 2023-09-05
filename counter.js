//Given an integer n, return a counter function. This counter function initially 
//returns n and then returns 1 more than the previous value every subsequent time 
//it is called (n, n + 1, n + 2, etc).


let miContador = 0;

// Función para crear y gestionar el contador
function crearContador(numeroInicial) {

    let contador = numeroInicial;
    // Función para actualizar el valor en la página
    function actualizarValor() {
        document.getElementById('contador').textContent = contador;
    }
    // Función para incrementar el contador
    function incrementar() {
        contador++;
        actualizarValor();
    }
    return {
        incrementar,
    };
}
    
document.getElementById('crearContador').addEventListener('click', function () {
    const numeroInicial = parseInt(document.getElementById('integer').value);
    if (!isNaN(numeroInicial)) {
        miContador = crearContador(numeroInicial);
        miContador.incrementar(); // Incrementar una vez al crear el contador
    }
});

// Agregar manejadores de eventos a los botones "Incrementar" y "Decrementar"
document.getElementById('incrementar').addEventListener('click', function () {
    if (miContador) {
        miContador.incrementar();
    }
});
    

            


