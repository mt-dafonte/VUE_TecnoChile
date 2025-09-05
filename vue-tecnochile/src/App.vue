<script setup>

import NavBar from './components/NavBar.vue';
import Carrusel from './components/Carrusel.vue';
import WelcomeTitle from './components/WelcomeTitle.vue';
import { ref } from 'vue';
import productsData from './data/products.json';
import FeaturedProductsCard from './components/FeaturedProductsCard.vue';
import AboutUs from './components/AboutUs.vue';
import Contacto from './components/Contacto.vue';
import Footer from './components/Footer.vue';
import Whatsapp from './components/Whatsapp.vue';


const featuredProducts = ref([]);
// Accede al array 'productos' dentro del JSON
// y filtra para obtener los primeros 6 productos.
featuredProducts.value = productsData.productos.slice(0, 9);


</script>

<template>

<NavBar />
<Carrusel />
<WelcomeTitle />
<FeaturedProductsCard :products="featuredProducts" />
<AboutUs />
<Contacto />
<Footer />
<Whatsapp />
</template>

<style scoped>
</style>
