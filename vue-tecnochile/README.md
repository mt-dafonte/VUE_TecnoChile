# Proyecto Tecno Chile (Versión Vue)

## Integrantes del Equipo
- María Teresa de la Fuente  
- Daniela Garrido Olivares  
- Gonzalo Román Reyes  

**Repositorio:** (https://github.com/mt-dafonte/VUE_TecnoChile)

---

## Descripción del Proyecto
"Tecno Chile" es una tienda de productos de tecnología que fue originalmente desarrollada con HTML, CSS y JavaScript. Esta versión ha sido migrada a **Vue 3** usando **Vite** como empaquetador, manteniendo la lógica de carga de productos desde JSON y la persistencia con `localStorage`.  

Por ahora, **solo la página principal (`index.html`) está operativa**. El carrito de compras y la sección de administración aún no están implementados, y no hay filtrado ni página de productos separada.  

---

### Estructura del Proyecto
```
vue-tecnochile/
├── index.html
├── package.json
├── vite.config.js
├── public/
│   ├── img/
│   └── vite.svg
├── src/
│   ├── App.vue
│   ├── main.js
│   ├── style.css
│   ├── assets/
│   │   └── img/
│   ├── components/
│   │   ├── AboutUs.vue
│   │   ├── Carrusel.vue
│   │   ├── Contacto.vue
│   │   ├── FeaturedProductsCard.vue
│   │   ├── Footer.vue
│   │   ├── Formulario.vue
│   │   ├── NavBar.vue
│   │   ├── WelcomeTitle.vue
│   │   └── Whatsapp.vue
│   └── data/
│       └── products.json
```

---

### Características Principales en Vue

### Migración a Vue
- La aplicación se ha modularizado mediante **componentes `.vue`** que se importan en `App.vue`.  
- Se mantiene **Bootstrap 5.3** para estilos, `style.css` global y `style scoped` en algunos componentes.  
- La navegación sigue siendo simple, **no se utiliza Vue Router**.  
- Por ahora solo se utiliza reactividad de Vue (`ref`).  

### Persistencia de Datos
- Los productos se cargan desde `src/data/products.json`.  
- Se utiliza `localStorage` para mantener los datos de los productos y el carrito.  


### Documentación:
 El proceso se basa en dos principios clave de Vue: la reactividad y el uso de props.
  
---
### El Proceso de Carga y Muestra de Productos
La lógica se divide entre el componente principal y el componente que muestra los productos.

1. Carga de los Datos (Componente Padre)
En el componente principal (App.vue), se importa el archivo JSON de productos. Vite, el empaquetador que usa Vue, maneja esta importación automáticamente, convirtiendo el JSON en un objeto JavaScript.

```
// App.vue
import { ref } from 'vue';
import productsData from './data/products.json';
import FeaturedProductsCard from './components/FeaturedProductsCard.vue';

// Se crea una variable reactiva para guardar los productos
const featuredProducts = ref([]);

// Se asignan los productos al array reactivo.
// Se usa .slice(0, 6) para tomar solo los primeros 6 productos del JSON.
featuredProducts.value = productsData.productos.slice(0, 6);
```
- import productsData from './data/products.json': Esta línea carga el contenido del archivo JSON en una variable productsData como si fuera un objeto de JavaScript.

- const featuredProducts = ref([]): Se usa ref para crear una variable reactiva. Esto significa que cuando el valor de featuredProducts cambie, Vue actualizará automáticamente la vista (el HTML).

- featuredProducts.value = ...: Para cambiar el valor de una variable ref, siempre se debe acceder a su propiedad .value.

---

2. Pasar los Datos (Props)

Una vez que los datos están cargados en el componente padre, se pasan al componente hijo (FeaturedProductsCard.vue) como una propiedad o prop. Esto se hace en la sección ```<template>```.

```<template>
  <FeaturedProductsCard :products="featuredProducts" />
</template>
```

- :products: El colon (:) es una forma corta de la directiva v-bind, que vincula una propiedad (products) del componente hijo a una variable (featuredProducts) del componente padre.

- "featuredProducts": Es el valor que se le pasa al componente hijo.

---

3. Usar los Datos (Componente Hijo)

```// FeaturedProductsCard.vue
<script setup>
import { defineProps } from 'vue';

// Define que el componente espera recibir una propiedad llamada 'products'

const props = defineProps({
  products: {
    type: Array,
    required: true
  }
});
</script>

<template>
  <div v-for="product in props.products" :key="product.id" class="col">
    <img :src="product.urlImagen" :alt="product.nombre">
    <h3>{{ product.nombre }}</h3>
    <p>{{ product.descripcion }}</p>
    <p>{{ product.precio }}</p>
    </div>
</template>
```

- defineProps: Esta macro es la forma en que Vue 3 declara las propiedades que un componente puede recibir de su padre.

- v-for="product in props.products": Esta directiva recorre el array products que recibimos, asignando cada elemento a la variable product temporalmente.

- :key="product.id": Esta es una directiva obligatoria que ayuda a Vue a identificar cada elemento de la lista de forma única, lo que optimiza el rendimiento.

- {{ product.nombre }}: Esta sintaxis de doble bigote se llama interpolación de texto. Permite mostrar el valor de una variable de JavaScript directamente en el HTML.

En resumen, la lógica es: el padre se encarga de la data y se la pasa al hijo, y el hijo se encarga de la vista y la renderiza usando v-for. Es un flujo de datos unidireccional que hace que el código sea predecible y fácil de mantener.

### Dependencias y Tecnologías
Vue 3: Framework JavaScript para la creación de componentes reactivos.
Vite: Empaquetador y servidor de desarrollo.
Bootstrap 5.3: Framework CSS para diseño responsivo y componentes UI.
Bootstrap Icons: Librería de iconos.

### Como ejecutar el proyecto en local
1. Clonar el repositorio:
git clone https://github.com/mt-dafonte/VUE_TecnoChile.git
cd VUE_TecnoChile/vue-tecnochile

2. Instalar dependencias:
npm install

3. Iniciar el servidor de desarrollo:
npm run dev

4. Abrir el navegador en la URL que indique Vite:
http://localhost:5173/

### Diseño y Estándares
- La estética general se mantiene de la versión anterior: limpia y moderna.
- Interfaz responsive con Bootstrap.
- Se actualizaron solo algunos elementos gráficos, como la imagen del carrusel y el fondo del formulario de contacto.

### Notas Adicionales
- La lógica de la carga y renderizado de productos se basa en principios de reactividad y props de Vue.
- El proyecto sigue en desarrollo: el carrito y la sección admin aún no están implementados.
- Esta versión sirve como base para convertir el proyecto estático original en un SPA con componentes reutilizables y un flujo de datos más organizado.