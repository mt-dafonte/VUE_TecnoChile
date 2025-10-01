# Vue 3 + Vite
# Módulo 6 - ABPRO3
# TECNO CHILE (Vue 3)

## Descripción del Proyecto
Prototipo funcional de tienda en línea para "Tecno Chile" con **Vue 3**:
- Los productos se gestionan mediante arrays reactivos de Vue 3 (ref y computed)
- El carrito persiste en localStorage, permitiendo mantener los productos agregados aunque se recargue la página
- Todos los componentes están desacoplados para fácil mantenimiento y escalabilidad
- Se utiliza Bootstrap 5 para el diseño y la implementación de offcanvas, botones y tablas responsivas

El sitio incluye:
- Landing page responsivo
- Carrito de compras dinámico mediante **offcanvas**
- Persistencia de datos con **localStorage**
- Componentización completa usando Vue 3

---

## Integrantes del Equipo
- María Teresa de la Fuente
- Daniela Garrido Olivares
- Gonzalo Román Reyes

---

## Repositorio
🔗 [https://github.com/mt-dafonte/VUE_TecnoChile/tree/Api]

---

## Tecnologías Utilizadas
- **Frontend**: HTML5, CSS3, JavaScript (ES6+)
- **Frameworks/Librerías**: 
  - **Vue 3** (component-based architecture)
  - **Bootstrap 5** (diseño responsivo y componentes UI)
  - **Font Awesome** (íconos)
- **Almacenamiento**: LocalStorage (persistencia de usuario y carrito)

---

## Estructura del Proyecto

```bash
VUE_TecnoChile/
├── public/
│   └── index.html            # Entrada principal
├── src/
│   ├── assets/
│   │   ├── css/              # Estilos personalizados
│   │   └── img/              # Imágenes del proyecto
│   ├── components/           # Componentes Vue
│   │   ├── NavBar.vue
│   │   ├── Cart.vue
│   │   ├── FeaturedProductsCard.vue
│   │   ├── Carrusel.vue
│   │   ├── WelcomeTitle.vue
│   │   ├── Buscador.vue
│   │   ├── AboutUs.vue
│   │   ├── Contacto.vue
│   │   ├── Footer.vue
│   │   └── Whatsapp.vue
│   ├── services/             # Servicios API
│   │   └── api.js
│   ├── App.vue               # Componente raíz
│   └── main.js               # Entrada de Vue
└── README.md                 # Documentación

```

## Funcionalidades Implementadas

## Navegación y Estructura

- Navbar responsive con enlaces a todas las secciones y al carrito (offcanvas)
- Footer con íconos de redes sociales y enlaces importantes
- Diseño completamente responsivo (mobile-first)

## Landing Page

- Sección hero con carrusel de imágenes
- Sección "Productos Destacados" con cards interactivas
- Sección "Sobre Nosotros" con información de la empresa
- Área de contacto con formulario y mapa integrado

## Área de Productos
- Cards de productos generadas dinámicamente con Vue 3
- Filtrado de productos mediante input de búsqueda
- Carrito de compras funcional en offcanvas
- Añadir o eliminar productos, con control de cantidad

## Carrito de Compras (Offcanvas)
- Mostrar productos agregados con ID, nombre, precio, cantidad y total por producto
- Botones para aumentar o disminuir cantidad
- Botón para eliminar productos individuales
- Botón "Vaciar Carrito"
- Cálculo automático del total
- Persistencia usando localStorage
- Contador de productos visible sobre el ícono del carrito en el navbar

## Interacción con el Usuario
- Solicitud de nombre y apellido al ingresar al sitio
- Mensaje personalizado de bienvenida

## Requerimientos Cumplidos
- 1	Home con lista de productos	✅
- 2	Búsqueda de productos por nombre ✅
- 3	Añadir productos a carrito de compra indicando cantidad	✅
- 4	Ver carrito de compras (off canvas)	✅
- 5	Lista de productos a través de simulación de API (api.js)	✅
- 6	Respuesta asíncrona a través de promesa	✅
- 7	Inicio de sesión con mail y contraseña (auth.js)✅
- 8	Autenticación con credenciales válidas (correo@tecnochile.com // Password: 123456) ✅
- 9	Mensaje de error con credenciales inválidas ✅
- 10  Link a login en Navbar ✅
- 11  Cerrar sesión en menú desplegable en Navbar ✅
- 12  Formulario para inicio de sesión ✅
- 13  Agregar y eliminar productos del carrito individualmente ✅
- 14	Cálculo de precio total	✅
- 15	Vaciar carrito completamente ✅

## Instalación y Ejecución Local

### Instalar dependencias
cd vue-tecnoChile
npm install

### Ejecutar el servidor de desarrollo
npm run dev


### Abrir en navegador
Por defecto estará disponible en http://localhost:5173/ (o puerto indicado por Vite)
