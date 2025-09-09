<script setup>
import { ref, computed, onMounted } from 'vue';
import { listProducts } from '../services/api.js';

// Input del buscador
const busqueda = ref("");

// Array para guardar productos cargados
const productos = ref([]); 

// Cargar productos al montar el componente
onMounted(async () => {
  productos.value = await listProducts();
});

// Filtrar productos según el input
const productosFiltrados = computed(() => {
  return productos.value.filter((producto) =>
    producto.nombre.toLowerCase().includes(busqueda.value.toLowerCase())
  );
});

</script>


<template>
  <div class="container mt-4">
    <h2 class="text-center">Búsqueda de productos</h2>

    <!-- Input del buscador -->
    <div class="d-flex justify-content-center">
      <input
        type="text"
        v-model="busqueda"
        class="form-control w-50"
        placeholder="Buscar productos..."
      />
    </div>

    <!-- Resultados -->
    <section class="d-flex my-5 col col-lg-12 flex-wrap gap-3 justify-content-center">
      <div
        v-for="(producto, index) in productosFiltrados"
        :key="index"
        class="card p-3 shadow-sm"
        style="width: 200px;"
      >
       <img
          v-if="producto.urlImagen"
          :src="producto.urlImagen"
          :alt="producto.nombre"
          class="img-fluid mb-2"
        />

        <h5 class="text-center">{{ producto.nombre }}</h5>
        <p class="text-muted text-center">{{ producto.precio }} USD</p>
      </div>
    </section>
  </div>
</template>

<style scoped>
.card img {
  max-height: 120px;
  object-fit: contain;
}

</style>