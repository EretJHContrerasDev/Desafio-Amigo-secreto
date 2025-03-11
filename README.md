# 📌 Amigo Secreto 🎁

### Descripción

Este proyecto es una aplicación web que permite ingresar nombres de amigos en una lista y realizar un sorteo aleatorio para determinar quién es el "amigo secreto".

### Funciones principales

#### 1️⃣ agregarAmigo()

- 👉 **Propósito**:Permite que el usuario agregue nombres a la lista de amigos.
- 🔹 Pasos que sigue la función:
1. Obtiene el valor ingresado en el campo de texto.
2. Verifica que el usuario no haya ingresado un nombre vacío.
3. Agrega el nombre a la lista nombreAmigos.
4. Actualiza la lista visual en la página llamando a actualizarLista().
5. Habilita el botón de sorteo si estaba desactivado.
6. Reinicia la variable nombresSorteados en false para permitir nuevos sorteos.
7. Limpia el campo de entrada después de agregar el nombre.

### 2️⃣ actualizarLista()

- 👉 Propósito:Actualiza visualmente la lista de nombres ingresados en la interfaz.
- 🔹 Pasos que sigue la función:
1. Selecciona el elemento <ul> donde se mostrarán los nombres.
2. Borra los elementos existentes para evitar duplicados.
3. Recorre el array nombreAmigos y agrega cada nombre como un <li> dentro de la lista.

### 3️⃣ sortearAmigo()
- 👉 Propósito:Selecciona aleatoriamente un nombre de la lista y lo muestra en la pantalla.
- 🔹 Pasos que sigue la función:
1. Verifica si todos los nombres fueron sorteados
   - Si nombresSorteados es true, muestra una alerta y finaliza la función.
2. Valida que haya nombres en la lista antes de sortear.
   - Si la lista está vacía, no hace nada.
3. Limpia el resultado anterior
   - Borra el contenido del elemento donde se mostrará el nombre sorteado para evitar que se acumulen los resultados.
4. Genera un número aleatorio
   - Usa Math.random() y Math.floor() para seleccionar un índice aleatorio dentro del array nombreAmigos.
5. Elimina el nombre seleccionado del array
   - Utiliza splice() para remover el amigo sorteado de la lista, evitando que pueda salir nuevamente.
6. Muestra el nombre sorteado en la interfaz
   - Escribe el resultado dentro del <ul> correspondiente.
7. Si la lista se vacía después del sorteo:
   - Borra los nombres visibles en la lista.
   - Marca nombresSorteados = true para indicar que se sortearon todos los nombres.


# 📌 Consideraciones adicionales

- Si el usuario intenta sortear cuando ya no hay nombres, verá una alerta.
- Cuando el usuario agrega nuevos nombres después de un sorteo completo, el sistema se reinicia automáticamente y permite realizar nuevos sorteos.

#### 🎯 Tecnologías utilizadas
- HTML para la estructura de la página.
- CSS para los estilos visuales.
- JavaScript para la lógica del sorteo y manipulación del DOM.
