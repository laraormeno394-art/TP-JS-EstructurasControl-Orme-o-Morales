const edadInput = prompt("Ingrese la edad del conductor:");
const coberturaInput = prompt("Ingrese el tipo de cobertura (terceros, terceros_completo, todo_riesgo):");
const accidentesInput = prompt("Ingrese la cantidad de accidentes en el último año:");

const edad = parseInt(edadInput, 10);
const cobertura = coberturaInput ? coberturaInput.toLowerCase().trim() : "";
const accidentes = parseInt(accidentesInput, 10);

if (isNaN(edad) || isNaN(accidentes) || edad <= 0 || accidentes < 0) {
    alert("Error: Por favor ingrese datos numéricos válidos.");
} else if (accidentes >= 3 && cobertura === "todo_riesgo") {
    alert("Negativa de contratación: La opción 'todo_riesgo' no está permitida para conductores con 3 o más accidentes.");
} else {
    let tarifaBase = 0;

    switch (cobertura) {
        case "terceros":
            tarifaBase = 45000;
            break;
        case "terceros_completo":
            tarifaBase = 70000;
            break;
        case "todo_riesgo":
            tarifaBase = 110000;
            break;
        default:
            alert("Cobertura no válida.");
            break;
    }

    if (tarifaBase > 0) {
        let precioFinal = tarifaBase;

        if (edad < 25) {
            precioFinal += tarifaBase * 0.20;
        }

        if (accidentes === 0) {
            precioFinal -= tarifaBase * 0.10;
        } else if (accidentes >= 3) {
            precioFinal += tarifaBase * 0.30;
        }

        alert(`El valor final de la póliza es: $${precioFinal.toLocaleString("es-AR")} ARS`);
    }
}