// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. 
// Aquí deberás desarrollar la lógica para resolver el problema.

// Lista para almacenar los nombres
let nombreAmigos = [];

// Variable para controlar si ya se sortearon todos los nombres
let nombresSorteados = false;

// Función para agregar nombres a la lista
function agregarAmigo() {
    let input = document.getElementById("amigo");
    let nombre = input.value.trim();

    if (nombre === "") {
        alert("Por favor, inserte un nombre.");
        return;
    }

    // Agregar nombre a la lista
    nombreAmigos.push(nombre);
    actualizarLista();
    
    // Habilitar el botón de sorteo si estaba desactivado
    document.querySelector(".button-draw").disabled = false;

    // Reiniciar el estado de nombres sorteados
    nombresSorteados = false;

    // Limpiar el campo de entrada
    input.value = "";
}

// Función para actualizar la lista en el HTML
function actualizarLista() {
    let ul = document.getElementById("listaAmigos");
    ul.innerHTML = ""; // Limpiar la lista antes de actualizar

    for (let i = 0; i < nombreAmigos.length; i++) {
        ul.innerHTML += `<li>${nombreAmigos[i]}</li>`;
    }
}

// Función para sortear un amigo secreto
function sortearAmigo() {
    // 1. Si ya se sortearon todos los nombres y el usuario presiona de nuevo, mostrar alerta
    if (nombresSorteados) {
        alert("Todos los nombres han sido sorteados.");
        return;
    }

    // 2. Validar que haya amigos en la lista
    if (nombreAmigos.length === 0) {
        return;
    }

    // 3. Limpiar el mensaje anterior de "El amigo secreto es..."
    let resultado = document.getElementById("resultado");
    resultado.innerHTML = "";

    // 4. Generar un índice aleatorio
    let indiceAleatorio = Math.floor(Math.random() * nombreAmigos.length);

    // 5. Obtener el nombre sorteado y eliminarlo de la lista
    let amigoSecreto = nombreAmigos.splice(indiceAleatorio, 1)[0];

    // 6. Mostrar el resultado en la pantalla
    resultado.innerHTML = `<li>🎉 El amigo secreto es: <strong>${amigoSecreto}</strong> 🎉</li>`;

    // 7. Si es el primer sorteo, limpiar la lista visualmente en pantalla
    if (nombreAmigos.length === 0) {
        document.getElementById("listaAmigos").innerHTML = ""; // Elimina la lista visible

        // Marcar que todos fueron sorteados
        nombresSorteados = true;

        
    }
}
