// ==========================================
// LECCIÓN 1: INTRODUCCIÓN Y BIENVENIDA
// ==========================================

// Mensaje inicial en la consola para verificar la conexión del script
console.log("¡Script de JavaScript cargado correctamente con el HTML!");

// Solicitar el nombre del usuario mediante prompt
let nombreUsuario = prompt("¡Hola! Bienvenido a la aplicación. ¿Cuál es tu nombre?");

// Validar que el usuario no haya dejado el campo vacío o cancelado
if (!nombreUsuario) {
    nombreUsuario = "Anónimo";
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

// ==========================================
// LECCIÓN 3: ARREGLOS Y CICLOS
// ==========================================

console.log("\n--- Iniciando Lección 3 ---");

// 1. Crear un arreglo con una lista de elementos (precios de servicios de diseño/desarrollo)
let listaPrecios = [120, 450, 80, 250, 600, 150];
console.log("Lista inicial de precios registrados:", listaPrecios);

// 2. Usar un bucle FOR para recorrer el arreglo y calcular el total acumulado
let sumaTotalCiclo = 0;

for (let i = 0; i < listaPrecios.length; i++) {
    console.log("Procesando índice " + i + " -> Precio: $" + listaPrecios[i]);
    sumaTotalCiclo += listaPrecios[i];
}
console.log("Suma total acumulada con bucle FOR: $" + sumaTotalCiclo);

// 3. Usar un bucle WHILE para realizar una simulación de cobros controlados
console.log("--- Simulación con bucle WHILE ---");
let contador = 0;
let saldoSimulado = 1000; // Presupuesto máximo del cliente

while (saldoSimulado > 0 && contador < listaPrecios.length) {
    let precioActual = listaPrecios[contador];
    
    if (saldoSimulado >= precioActual) {
        saldoSimulado -= precioActual;
        console.log("Compra aprobada: $" + precioActual + ". Saldo restante: $" + saldoSimulado);
    } else {
        console.log("Compra rechazada para $" + precioActual + ": Saldo insuficiente ($" + saldoSimulado + ")");
    }
    contador++; // Importantísimo para evitar bucles infinitos
}

// 4. Implementar una función básica para filtrar elementos según una condición
// La idea es identificar cuáles son los servicios "Premium" (precios mayores a 200)
function filtrarServiciosCaros(arregloPrecios) {
    // Usamos el método filter de JavaScript, que recorre internamente el arreglo bajo una condición
    let filtrados = arregloPrecios.filter(function(precio) {
        return precio > 200;
    });
    return filtrados;
}

// Llamamos a la función de filtrado y mostramos el resultado
let serviciosPremium = filtrarServiciosCaros(listaPrecios);
console.log("Servicios Premium (mayores a $200):", serviciosPremium);


// ==========================================
// LECCIÓN 4: FUNCIONES EN JAVASCRIPT
// ==========================================

console.log("\n--- Iniciando Lección 4 ---");

// 1. Crear funciones individuales para cada operación matemática básica
function sumar(a, b) {
    return a + b;
}

function restar(a, b) {
    return a - b;
}

function multiplicar(a, b) {
    return a * b;
}

function dividir(a, b) {
    if (b === 0) {
        console.warn("Validación: No se puede dividir por cero.");
        return 0;
    }
    return a / b;
}

// 2. Implementar una función optimizada que llama a otras funciones internamente
// Esta función recibe el subtotal, calcula el impuesto usando 'multiplicar' y el total usando 'sumar'
function calcularPresupuestoFinal(subtotal, porcentajeImpuesto) {
    console.log("--- Modularización: Calculando presupuesto final ---");
    
    // Validamos que los parámetros recibidos sean válidos antes de operar
    if (isNaN(subtotal) || isNaN(porcentajeImpuesto)) {
        return "Error: Parámetros inválidos para el cálculo.";
    }

    // Convertimos el porcentaje (ej: 19) a decimal (0.19) usando nuestra función de división
    let factorImpuesto = dividir(porcentajeImpuesto, 100);
    
    // Calculamos el valor del impuesto llamando a la función multiplicar
    let impuesto = multiplicar(subtotal, factorImpuesto);
    
    // Calculamos el total final llamando a la función sumar
    let totalFinal = sumar(subtotal, impuesto);

    // Retornamos un mensaje estructurado de forma clara
    return "Subtotal: $" + subtotal + " | Impuesto (" + porcentajeImpuesto + "%): $" + impuesto + " | Total: $" + totalFinal;
}

// 3. Probar el funcionamiento llamando a las funciones modulares con datos reales
console.log("Prueba directa de función sumar (45 + 55): " + sumar(45, 55));
console.log("Prueba directa de función dividir (100 / 0): " + dividir(100, 0));

// Ejecutamos la función optimizada pasándole un subtotal de 500 y un impuesto del 19%
let resultadoPresupuesto = calcularPresupuestoFinal(500, 19);
console.log(resultadoPresupuesto);