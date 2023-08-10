var saldo = 1000;
var historialTransacciones = [];

function mostrarSaldo() {
    return "Tu saldo actual es: $" + saldo;
}

function realizarDeposito(cantidad) {
    saldo += cantidad;
    var transaccion = "Depósito de $" + cantidad;
    historialTransacciones.push(transaccion);
    return "Depósito realizado. Saldo actual: $" + saldo;
}

function realizarRetiro(cantidad) {
    if (cantidad <= saldo) {
        saldo -= cantidad;
        var transaccion = "Retiro de $" + cantidad;
        historialTransacciones.push(transaccion);
        return "Retiro realizado. Saldo actual: $" + saldo;
    } else {
        return "Fondos insuficientes para realizar el retiro.";
    }
}

function mostrarHistorialTransacciones() {
    var historial = "Historial de transacciones:\n";
    for (var i = 0; i < historialTransacciones.length; i++) {
        historial += historialTransacciones[i] + "\n";
    }
    return historial;
}

function main() {
    var continuar = true;

    while (continuar) {
        var opcion = prompt(
            "Bienvenido al Simulador de Banco\n" +
            "Opciones:\n" +
            "1. Consultar saldo\n" +
            "2. Realizar depósito\n" +
            "3. Realizar retiro\n" +
            "4. Mostrar historial de transacciones\n" +
            "5. Salir"
        );

        switch (opcion) {
            case "1":
                alert(mostrarSaldo());
                break;
            case "2":
                var cantidadDeposito = parseFloat(prompt("Ingresa la cantidad a depositar:"));
                alert(realizarDeposito(cantidadDeposito));
                break;
            case "3":
                var cantidadRetiro = parseFloat(prompt("Ingresa la cantidad a retirar:"));
                alert(realizarRetiro(cantidadRetiro));
                break;
            case "4":
                alert(mostrarHistorialTransacciones());
                break;
            case "5":
                alert("Gracias por usar el Simulador de Banco. ¡Hasta luego!");
                continuar = false;
                break;
            default:
                alert("Opción inválida. Por favor, selecciona una opción válida.");
        }
    }
}

main();
