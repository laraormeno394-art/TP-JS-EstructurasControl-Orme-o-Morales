const montoARSInput = prompt("Ingrese el monto en Pesos Argentinos (ARS):");
const monedaDestinoInput = prompt("Ingrese la moneda de destino (USD, EUR, BRL):");
const mesesInput = prompt("Ingrese la cantidad de meses para la proyección de inflación (1 a 12):");

const montoARS = parseFloat(montoARSInput);
const monedaDestino = monedaDestinoInput ? monedaDestinoInput.toUpperCase().trim() : "";
const meses = parseInt(mesesInput, 10);

if (isNaN(montoARS) || isNaN(meses) || montoARS <= 0 || meses < 1 || meses > 12) {
    console.log("Error: Verifique que el monto sea mayor a 0 y que los meses estén entre 1 y 12.");
} else {
    let cotizacion = 0;

    switch (monedaDestino) {
        case "USD":
            cotizacion = 1300;
            break;
        case "EUR":
            cotizacion = 1420;
            break;
        case "BRL":
            cotizacion = 220;
            break;
        default:
            console.log("Moneda de destino no admitida.");
            break;
    }

    if (cotizacion > 0) {
        const comision = montoARS * 0.02;
        const montoNetoARS = montoARS - comision;
        const montoExtranjero = montoNetoARS / cotizacion;

        const montoProyectadoARS = montoARS * (1 + 0.04 * meses);

        console.log("=== REPORTES DEL CONVERSOR FINANCIERO ===");
        console.log(`Monto depositado: $${montoARS.toFixed(2)} ARS`);
        console.log(`Comisión por servicio (2%): $${comision.toFixed(2)} ARS`);
        console.log(`Monto final en divisa (${monedaDestino}): ${montoExtranjero.toFixed(2)} ${monedaDestino}`);
        console.log(`Proyección de pérdida por inflación (${meses} meses al 4% mensual): $${montoProyectadoARS.toFixed(2)} ARS equivalentes necesarios.`);
    }
}