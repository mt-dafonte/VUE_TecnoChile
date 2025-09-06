# Resumen del Funcionamiento
Tu aplicación está estructurada para manejar la autenticación del usuario de manera fluida y sin recargar la página, utilizando un enfoque modular y la librería de Bootstrap para la interfaz de usuario.

---

### El flujo de autenticación se divide en tres partes principales:

1. Simulación de la API: Un archivo de servicio (services/auth.js) simula una API que verifica las credenciales del usuario.

2. Gestión de Estado: Un store (store/auth.js) mantiene el estado del usuario logueado de forma reactiva y global, lo que permite que cualquier componente acceda a él.

3. Interfaz de Usuario: El componente NavBar.vue contiene la lógica del formulario de inicio de sesión y la interfaz para mostrar los enlaces de login o de usuario, lo que crea una experiencia de usuario integrada y sin interrupciones.

---

### Requerimiento 1: Autenticación (Login y Logout)

La autenticación se maneja a través de un servicio y un store separados para mantener una clara división de responsabilidades.

- services/auth.js (Simulación de la API): Este archivo contiene la función login(creds) que simula la validación de credenciales. Retorna una promesa que se resuelve con un objeto de usuario (User) si las credenciales son correo@tecnochile.com y 123456, o lanza un error si no coinciden. Esta función simula un retardo de 1 segundo para imitar la latencia de una llamada a una API real.

- store/auth.js (Gestión de Estado): Este archivo define una variable reactiva (user) que almacena la información del usuario logueado. También exporta dos funciones clave:
  - loginUser(userData): Actualiza el valor de user con los datos del usuario que ha iniciado sesión. 

  - logoutUser(): Establece user en null, lo que indica que no hay ningún usuario logueado.

---

### Requerimiento 2: Formulario de Inicio de Sesión y Enlaces Condicionales

El formulario de inicio de sesión y los enlaces del menú se gestionan dentro del componente NavBar.vue, lo que permite una experiencia de usuario fluida y sin recargas de página.

- Formulario de Inicio de Sesión: El formulario está integrado en un modal de Bootstrap. Al hacer clic en el enlace "Login", un modal con los campos de correo y contraseña aparece en la pantalla.

- Manejo del Login:

  - El método handleLogin llama a la función login de tu servicio (services/auth.js).

  - Si el inicio de sesión es exitoso, se llama a loginUser del store para actualizar el estado global del usuario.

  - Una vez que el estado se actualiza, el modal se cierra programáticamente y se muestra una alerta de bienvenida.

- Enlaces Condicionales: Se utiliza la directiva v-if para mostrar u ocultar los enlaces del menú según el estado de la variable user del store.
  
  - Si el usuario no está logueado (v-if="!user"): Se muestra el enlace "Login", que abre el modal.

  - Si el usuario está logueado (v-else): Se muestra un menú desplegable con el nombre del usuario y la opción "Cerrar Sesión", que ejecuta la función handleLogout para restablecer el estado.

---

