<script setup>
import { defineProps } from 'vue';

// Define la prop 'products' que recibirá el array de productos
const props = defineProps({
  products: {
    type: Array,
    required: true
  }
});

// Función para formatear el precio como moneda (opcional, pero útil)
const formatPrice = (price) => {
  return new Intl.NumberFormat('es-CL', {
    style: 'currency',
    currency: 'CLP',
    minimumFractionDigits: 0 // Si quieres sin decimales para CLP
  }).format(price);
};

// Función para obtener el estado del stock (agotado o disponible)
const getStockStatus = (stock) => {
  return stock > 0 ? 'Disponible' : 'Agotado';
};

// Función para obtener la clase CSS según el stock
const getStockClass = (stock) => {
  return stock > 0 ? 'text-success' : 'text-danger';
};

// Función para verificar si el producto está agotado
const isOutOfStock = (stock) => {
  return stock === 0;
};
</script>

<template>
    <div id="title-products" class="container text-center my-5 bg-light p-2">
      <h2>Productos destacados</h2>
      <p>Descubre nuestra amplia gama de productos tecnológicos.</p>

      <!-- Sección de productos -->
      <section class="container my-5">
        <div class="row row-cols-1 row-cols-md-3 g-4 d-flex">
            <div v-for="product in props.products" :key="product.id" class="col d-flex">
                <div class="card h-100 product-card shadow-sm">
                    <img :src="product.urlImagen" class="card-img-top product-image" alt="product.nombre">
                    <div class="card-body d-flex flex-column justify-content-between">
                        <div>
                            <h5 class="card-title product-title">{{ product.nombre }}</h5>
                            <p class="card-text product-category">{{ product.categoria || product.etiqueta }}</p>

                            <p class="card-text">{{ product.descripcion }}</p>

                            <p class="card-text product-price"><strong>Precio: </strong>{{ formatPrice(product.precio) }}</p>
                            <p :class="['card-text', 'product-stock-status', getStockClass(product.stock)]">{{ getStockStatus(product.stock) }}</p>
                        </div>
                        <button class="btn btn-primary add-to-cart-btn mt-3" :disabled="isOutOfStock(product.stock)" :class="{ 'btn-secondary' : isOutOfStock(product.stock) }">{{ isOutOfStock(product.stock) ? 'Agotado' : 'Agregar al carrito' }}</button>
                    </div>
                </div>
            </div>
        </div>

        <div class="text-center my-4">
          <a href="/products.html" class="btn btn-primary">Ver todos los productos</a>
        </div>
      </section>
    </div>
</template>

<style scoped>
.my-custom-5 {
  margin-top: 7rem;
  margin-bottom: 5rem;
}
</style>