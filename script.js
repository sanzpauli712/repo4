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