const ingresosInput = prompt("Ingrese los ingresos brutos anuales (ARS):");
const superficieInput = prompt("Ingrese la superficie afectada en m²:");

const ingresosAnuales = parseFloat(ingresosInput);
const superficieM2 = parseFloat(superficieInput);

if (isNaN(ingresosAnuales) || isNaN(superficieM2) || ingresosAnuales < 0 || superficieM2 < 0) {
    alert("Error: Debe ingresar valores numéricos válidos.");
} else {
    let categoria = "";

    if (ingresosAnuales <= 6000000 && superficieM2 <= 30) {
        categoria = "Categoría A";
    } else if (ingresosAnuales <= 12000000 && superficieM2 <= 45) {
        categoria = "Categoría B";
    } else if (ingresosAnuales <= 18000000 && superficieM2 <= 85) {
        categoria = "Categoría C";
    } else {
        categoria = "Régimen General (Supera los límites máximos del Monotributo)";
    }

    alert(`Evaluación Tributaria: ${categoria}`);
}