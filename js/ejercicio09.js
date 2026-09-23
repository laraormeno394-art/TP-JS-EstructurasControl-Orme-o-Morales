const dificultadInput = prompt("¿Presenta dificultad para respirar? (si / no):");
const dolorInput = prompt("Ingrese nivel de dolor del 1 al 10:");
const presionInput = prompt("Ingrese presión arterial sistólica (mm Hg):");

const dificultadRespirar = dificultadInput ? dificultadInput.toLowerCase().trim() : "";
const nivelDolor = parseInt(dolorInput, 10);
const presionSistolica = parseFloat(presionInput);

if (isNaN(nivelDolor) || isNaN(presionSistolica)) {
    alert("Error: Debe ingresar valores numéricos para el nivel de dolor y la presión.");
} else {
    let nivelTriaje = "";
    let tiempoEspera = "";

    if (dificultadRespirar === "si" || presionSistolica > 180) {
        nivelTriaje = "Rojo (Atención Inmediata)";
        tiempoEspera = "0 minutos (Atención en el acto)";
    } else if (nivelDolor >= 7 || (presionSistolica >= 140 && presionSistolica <= 180)) {
        nivelTriaje = "Amarillo (Urgencia Media)";
        tiempoEspera = "Entre 30 y 60 minutos";
    } else {
        nivelTriaje = "Verde (Consulta Baja Prioridad)";
        tiempoEspera = "Hasta 120 minutos";
    }

    alert(`Triaje Asignado: Nivel ${nivelTriaje}\nTiempo estimado de espera: ${tiempoEspera}`);
}