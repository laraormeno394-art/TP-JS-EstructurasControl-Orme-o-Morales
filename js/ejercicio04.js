const distanciaInput = prompt("Ingrese la distancia del viaje (en km):");
const tiempoInput = prompt("Ingrese el tiempo estimado (en minutos):");
const demandaInput = prompt("Ingrese el nivel de demanda (baja, media, alta):");

const distanciaKm = parseFloat(distanciaInput);
const tiempoMin = parseFloat(tiempoInput);
const demanda = demandaInput ? demandaInput.toLowerCase().trim() : "";

if (isNaN(distanciaKm) || isNaN(tiempoMin) || distanciaKm < 0 || tiempoMin < 0) {
    alert("Error: Distancia o tiempo no válidos.");
} else {
    let factorDemanda = 0;
    let demandaValida = true;

    switch (demanda) {
        case "baja":
            factorDemanda = 1.0;
            break;
        case "media":
            factorDemanda = 1.3;
            break;
        case "alta":
            factorDemanda = 1.8;
            break;
        default:
            demandaValida = false;
            alert("Nivel de demanda no válido.");
            break;
    }

    if (demandaValida) {
        const bajadaBandera = 800;
        const costoDistancia = distanciaKm * 350;
        const costoTiempo = tiempoMin * 80;
        const subtotal = bajadaBandera + costoDistancia + costoTiempo;

        const peaje = distanciaKm > 20 ? 1500 : 0;
        const totalViaje = (subtotal * factorDemanda) + peaje;

        alert(`El costo estimado total del viaje es: $${totalViaje.toLocaleString("es-AR")} ARS`);
    }
}