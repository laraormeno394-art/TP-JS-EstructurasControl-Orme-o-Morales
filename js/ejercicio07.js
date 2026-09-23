const SALDO_INICIAL = 250000;
let saldoActual = SALDO_INICIAL;

const opcion = prompt(
    "Cajero Automático\n\n1: Consultar Saldo\n2: Extraer Dinero\n3: Depositar Dinero\n4: Salir\n\nSeleccione una opción (1-4):"
);

switch (opcion) {
    case "1":
        alert(`Su saldo actual es: $${saldoActual.toLocaleString("es-AR")} ARS`);
        break;

    case "2": {
        const montoExtraerInput = prompt("Ingrese el monto a extraer (múltiplo de $1.000 ARS):");
        const montoExtraer = parseFloat(montoExtraerInput);

        if (isNaN(montoExtraer) || montoExtraer <= 0) {
            alert("Error: Monto inválido.");
        } else if (montoExtraer % 1000 !== 0) {
            alert("Error: El dinero a extraer debe ser múltiplo de $1.000 ARS.");
        } else if (montoExtraer > saldoActual) {
            alert("Error: Fondos insuficientes.");
        } else {
            saldoActual -= montoExtraer;
            alert(`Extracción realizada con éxito. Nuevo saldo: $${saldoActual.toLocaleString("es-AR")} ARS`);
        }
        break;
    }

    case "3": {
        const montoDepositarInput = prompt("Ingrese el monto a depositar:");
        const montoDepositar = parseFloat(montoDepositarInput);

        if (isNaN(montoDepositar) || montoDepositar <= 0) {
            alert("Error: Monto a depositar inválido.");
        } else {
            saldoActual += montoDepositar;
            alert(`Depósito exitoso. Nuevo saldo: $${saldoActual.toLocaleString("es-AR")} ARS`);
        }
        break;
    }

    case "4":
        alert("Sesión finalizada. Gracias por utilizar el servicio.");
        break;

    default:
        alert("Opción no válida.");
        break;
}