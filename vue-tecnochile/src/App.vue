<script setup>
import { ref } from 'vue';
import productsData from './data/products.json';
import NavBar from './components/NavBar.vue';
import WelcomeTitle from './components/WelcomeTitle.vue';
import FeaturedProductsCard from './components/FeaturedProductsCard.vue';

const featuredProducts = ref([]);
// Accede al array 'productos' dentro del JSON
// y filtra para obtener los primeros 6 productos.
featuredProducts.value = productsData.productos.slice(0, 6);

</script>

<template>
<NavBar />
<WelcomeTitle />
<FeaturedProductsCard :products="featuredProducts" />
</template>

<style scoped>

</style>
