const ingresoInput = prompt("Ingrese su ingreso mensual neto (ARS):");
const antiguedadInput = prompt("Ingrese su antigüedad laboral en años:");
const deudasInput = prompt("¿Tiene deudas pendientes? (si / no):");
const montoInput = prompt("Ingrese el monto del crédito solicitado (ARS):");

const ingresoMensual = parseFloat(ingresoInput);
const antiguedadAnios = parseFloat(antiguedadInput);
const tieneDeudas = deudasInput ? deudasInput.toLowerCase().trim() : "";
const montoSolicitado = parseFloat(montoInput);

if (isNaN(ingresoMensual) || isNaN(antiguedadAnios) || isNaN(montoSolicitado) || ingresoMensual <= 0 || montoSolicitado <= 0) {
    alert("Error: Ingrese montos numéricos válidos.");
} else {
    if (tieneDeudas === "si") {
        alert("Solicitud Rechazada: Registro de deudas pendientes.");
    } else if (antiguedadAnios < 1) {
        alert("Solicitud Rechazada: La antigüedad laboral requerida es de al menos 1 año.");
    } else {
        const cuotaMensual = (montoSolicitado * 1.30) / 12;
        const limiteCuota = ingresoMensual * 0.30;

        if (cuotaMensual > limiteCuota) {
            alert(`Solicitud Rechazada: La cuota mensual ($${cuotaMensual.toFixed(2)}) supera el 30% de su ingreso mensual ($${limiteCuota.toFixed(2)}).`);
        } else {
            alert(`Solicitud Pre-Aprobada: Cuota estimada de $${cuotaMensual.toFixed(2)} ARS por mes (12 cuotas con 30% interés).`);
        }
    }
}