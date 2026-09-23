const rolInput = prompt("Ingrese su rol (admin, editor, cliente):");
const estadoInput = prompt("Ingrese el estado de la cuenta (activa, suspendida):");
const horaInput = prompt("Ingrese la hora actual (entero de 0 a 23):");

const rol = rolInput ? rolInput.toLowerCase().trim() : "";
const estado = estadoInput ? estadoInput.toLowerCase().trim() : "";
const hora = parseInt(horaInput, 10);

if (isNaN(hora) || hora < 0 || hora > 23) {
    alert("Hora no válida. Debe ser un entero entre 0 y 23.");
} else if (estado === "suspendida") {
    alert("Acceso denegado: La cuenta se encuentra suspendida.");
} else if (rol === "admin") {
    alert("Acceso permitido: Control total asignado.");
} else if (rol === "editor") {
    if (hora >= 8 && hora <= 18) {
        alert("Acceso permitido para Editor.");
    } else {
        alert("Acceso denegado: El rol Editor solo puede ingresar de 8 a 18 hs.");
    }
} else if (rol === "cliente") {
    if (estado === "activa") {
        alert("Acceso permitido para Cliente.");
    } else {
        alert("Acceso denegado.");
    }
} else {
    alert("Rol no autorizado.");
}