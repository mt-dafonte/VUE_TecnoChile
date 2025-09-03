### Documentación:
 El proceso se basa en dos principios clave de Vue: la reactividad y el uso de props.
  
---
### El Proceso de Carga y Muestra de Productos
La lógica se divide entre el componente principal y el componente que muestra los productos.

1. Carga de los Datos (Componente Padre)
En el componente principal (App.vue), importamos el archivo JSON de productos. Vite, el empaquetador que usa Vue, maneja esta importación automáticamente, convirtiendo el JSON en un objeto JavaScript.

```
// App.vue
import { ref } from 'vue';
import productsData from './data/products.json';
import FeaturedProductsCard from './components/FeaturedProductsCard.vue';

// Creamos una variable reactiva para guardar los productos
const featuredProducts = ref([]);

// Asignamos los productos al array reactivo.
// Usamos .slice(0, 6) para tomar solo los primeros 6 productos del JSON.
featuredProducts.value = productsData.productos.slice(0, 6);
```
- import productsData from './data/products.json': Esta línea es mágica. Carga el contenido de tu archivo JSON en una variable productsData como si fuera un objeto de JavaScript.

- const featuredProducts = ref([]): Usamos ref para crear una variable reactiva. Esto significa que cuando el valor de featuredProducts cambie, Vue actualizará automáticamente la vista (el HTML).

- featuredProducts.value = ...: Para cambiar el valor de una variable ref, siempre debes acceder a su propiedad .value.

---

2. Pasar los Datos (Props)

Una vez que los datos están cargados en el componente padre, los pasamos al componente hijo (FeaturedProductsCard.vue) como una propiedad o prop. Esto se hace en la sección ```<template>```.

```<template>
  <FeaturedProductsCard :products="featuredProducts" />
</template>
```

- :products: El colon (:) es una forma corta de la directiva v-bind, que vincula una propiedad (products) del componente hijo a una variable (featuredProducts) del componente padre.

- "featuredProducts": Es el valor que le estamos pasando al componente hijo.

---

3. Usar los Datos (Componente Hijo)

```// FeaturedProductsCard.vue
<script setup>
import { defineProps } from 'vue';

// Definimos que el componente espera recibir una propiedad llamada 'products'
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