// ==========================================
// LECCIÓN 1: INTRODUCCIÓN Y BIENVENIDA
// ==========================================

// Mensaje inicial en la consola para verificar la conexión del script
console.log("¡Script de JavaScript cargado correctamente con el HTML!");

// Solicitar el nombre del usuario mediante prompt
let nombreUsuario = prompt("¡Hola! Bienvenido a la aplicación. ¿Cuál es tu nombre?");

// Validar que el usuario no haya dejado el campo vacío o cancelado
if (!nombreUsuario) {
    nombreUsuario = "Desarrollador/a Anónimo/a";
}

// Mostrar un saludo personalizado en una ventana emergente
alert("¡Qué gusto tenerte aquí, " + nombreUsuario + "! Vamos a probar las herramientas de consola.");

// Mostrar el saludo también en la consola del navegador
console.log("Usuario actual registrado: " + nombreUsuario);


// ==========================================
// LECCIÓN 2: VARIABLES Y CONDICIONALES
// ==========================================

console.log("\n--- Iniciando Lección 2 ---");

// 1. Definir una constante para el impuesto/IVA (las constantes no cambian de valor)
const TASAINPUESTO = 0.19; // 19% de IVA (ejemplo común)

// 2. Pedir al usuario dos números utilizando prompt
let primerNumeroInput = prompt("Lección 2: Ingresa el valor del primer servicio/producto:");
let segundoNumeroInput = prompt("Lección 2: Ingresa el valor del segundo servicio/producto:");

// 3. VALIDACIÓN Y CONVERSIÓN: prompt siempre devuelve texto (string). 
// Usamos parseFloat() para convertirlo a número decimal.
let numero1 = parseFloat(primerNumeroInput);
let numero2 = parseFloat(segundoNumeroInput);

// Validamos si lo que ingresó el usuario realmente son números válidos utilizando isNaN()
if (isNaN(numero1) || isNaN(numero2)) {
    alert("¡Error! Uno o ambos valores ingresados no son números válidos. Se usarán valores por defecto (100 y 50).");
    numero1 = 100;
    numero2 = 50;
}

// 4. Operaciones matemáticas básicas
let suma = numero1 + numero2;
let resta = numero1 - numero2;
let multiplicacion = numero1 * numero2;
let division = numero2 !== 0 ? numero1 / numero2 : 0; // Evitamos la división por cero con un operador ternario básico
let impuestoCalculado = suma * TASAINPUESTO;
let totalConImpuesto = suma + impuestoCalculado;

// Mostramos los cálculos en la consola
console.log("Primer valor: " + numero1);
console.log("Segundo valor: " + numero2);
console.log("Resultado de la Suma: " + suma);
console.log("Resultado de la Resta: " + resta);
console.log("Resultado del Impuesto calculado (19%): " + impuestoCalculado);
console.log("Total con impuesto: " + totalConImpuesto);

// 5. Estructura Condicional (if / else) para evaluar el total del presupuesto
if (totalConImpuesto > 500) {
    console.log("Categoría de Presupuesto: Presupuesto Alto.");
} else if (totalConImpuesto >= 100 && totalConImpuesto <= 500) {
    console.log("Categoría de Presupuesto: Presupuesto Moderado.");
} else {
    console.log("Categoría de Presupuesto: Presupuesto Bajo o Económico.");
}

// 6. Estructura Condicional (switch) para elegir un beneficio basado en la categoría de usuario
let tipoCliente = prompt("Ingresa tu tipo de cliente (A, B o C):");

// Pasamos a mayúsculas para evitar errores si escriben 'a' minúscula
if (tipoCliente) tipoCliente = tipoCliente.toUpperCase(); 

switch (tipoCliente) {
    case 'A':
        console.log("Beneficio aplicado: Cliente VIP - 20% de descuento en la próxima compra.");
        break;
    case 'B':
        console.log("Beneficio aplicado: Cliente Frecuente - 10% de descuento en la próxima compra.");
        break;
    case 'C':
        console.log("Beneficio aplicado: Cliente Nuevo - Envío gratis o asesoría inicial sin costo.");
        break;
    default:
        console.log("Beneficio aplicado: Cliente Estándar - Sin beneficios adicionales asignados.");
        break;
}