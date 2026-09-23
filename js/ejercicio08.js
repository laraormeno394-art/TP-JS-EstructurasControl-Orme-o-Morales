const montoCarritoInput = prompt("Ingrese el monto total del carrito (ARS):");
const categoriaInput = prompt("Ingrese categoría del usuario (Bronce, Plata, Oro):");
const cuponInput = prompt("Ingrese código de cupón (DESC10, SUPER20 o presione Enter si no tiene):");

const montoCarrito = parseFloat(montoCarritoInput);
const categoriaUsuario = categoriaInput ? categoriaInput.trim() : "";
const codigoCupon = cuponInput ? cuponInput.toUpperCase().trim() : "";

if (isNaN(montoCarrito) || montoCarrito <= 0) {
    console.log("Error: Ingrese un monto de carrito válido.");
} else {
    let porcentajeMembresia = 0;
    const catFormateada = categoriaUsuario.toLowerCase();

    if (catFormateada === "plata") {
        porcentajeMembresia = 0.05;
    } else if (catFormateada === "oro") {
        porcentajeMembresia = 0.15;
    }

    let porcentajeCupon = 0;
    switch (codigoCupon) {
        case "DESC10":
            porcentajeCupon = 0.10;
            break;
        case "SUPER20":
            if (montoCarrito > 50000) {
                porcentajeCupon = 0.20;
            } else {
                console.log("El cupón SUPER20 solo es válido para compras mayores a $50.000 ARS.");
            }
            break;
        default:
            porcentajeCupon = 0;
            break;
    }

    const descMembresia = montoCarrito * porcentajeMembresia;
    const descCupon = montoCarrito * porcentajeCupon;
    const totalDescuentos = descMembresia + descCupon;
    const subtotal = montoCarrito - totalDescuentos;

    const costoEnvio = subtotal > 100000 ? 0 : 4500;
    const totalNeto = subtotal + costoEnvio;

    console.log("=== RESUMEN DE LA COMPRA ===");
    console.log(`Monto inicial del carrito: $${montoCarrito.toFixed(2)} ARS`);
    console.log(`Descuento por membresía (${categoriaUsuario || "Ninguna"}): -$${descMembresia.toFixed(2)} ARS`);
    console.log(`Descuento por cupón (${codigoCupon || "Ninguno"}): -$${descCupon.toFixed(2)} ARS`);
    console.log(`Costo de envío: ${costoEnvio === 0 ? "¡Gratis!" : "$" + costoEnvio.toFixed(2) + " ARS"}`);
    console.log(`Total Neto a pagar: $${totalNeto.toFixed(2)} ARS`);
}