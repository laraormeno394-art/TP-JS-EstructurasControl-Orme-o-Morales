const sueldoBrutoInput = prompt("Ingrese el Sueldo Bruto del trabajador (ARS):");
const sueldoBruto = parseFloat(sueldoBrutoInput);

if (isNaN(sueldoBruto) || sueldoBruto <= 0) {
    console.log("Error: Ingrese un valor numérico de sueldo bruto válido.");
} else {
    const retJubilacion = sueldoBruto * 0.11;
    const retObraSocial = sueldoBruto * 0.03;
    const retLey19032 = sueldoBruto * 0.03;
    const totalRetencionesFijas = retJubilacion + retObraSocial + retLey19032;

    const sueldoNetoProvisorio = sueldoBruto - totalRetencionesFijas;
    let impuestoGanancias = 0;

    if (sueldoNetoProvisorio > 2000000) {
        impuestoGanancias = 120000 + (sueldoNetoProvisorio - 2000000) * 0.25;
    } else if (sueldoNetoProvisorio > 1200000) {
        impuestoGanancias = (sueldoNetoProvisorio - 1200000) * 0.15;
    }

    const sueldoNetoFinal = sueldoNetoProvisorio - impuestoGanancias;

    console.log("=== DETALLE DE LIQUIDACIÓN SALARIAL ===");
    console.log(`Sueldo Bruto: $${sueldoBruto.toFixed(2)} ARS`);
    console.log(`Descuentos de Ley (Jubilación, Obra Social, Ley 19.032): $${totalRetencionesFijas.toFixed(2)} ARS`);
    console.log(`Retención Impuesto a las Ganancias: $${impuestoGanancias.toFixed(2)} ARS`);
    console.log(`Sueldo Neto Final a Cobrar: $${sueldoNetoFinal.toFixed(2)} ARS`);
}