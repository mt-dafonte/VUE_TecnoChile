<script setup>
import { ref, onMounted, watch, computed } from 'vue';
import { listProducts } from './services/api.js';

import NavBar from './components/NavBar.vue';
import Carrusel from './components/Carrusel.vue';
import WelcomeTitle from './components/WelcomeTitle.vue';
import Buscador from './components/Buscador.vue';
import FeaturedProductsCard from './components/FeaturedProductsCard.vue';
import AboutUs from './components/AboutUs.vue';
import Contacto from './components/Contacto.vue';
import Footer from './components/Footer.vue';
import Whatsapp from './components/Whatsapp.vue';

const carrito = ref([]);
const usuario = ref(localStorage.getItem('user') || '');
const productos = ref([]);
const featuredProducts = ref([]);
const mostrarTodos = ref(false);

// Cargar usuario, productos y carrito
onMounted(async () => {
    // Pedir nombre solo si no existe
    if (!usuario.value) {
        usuario.value = prompt('Ingrese su nombre y apellido');
        localStorage.setItem('user', usuario.value);
    }

    // Cargar productos desde API
    productos.value = await listProducts();
    featuredProducts.value = productos.value.slice(0, 6);

    // Cargar carrito desde localStorage
    const guardado = localStorage.getItem('carrito');
    if (guardado) carrito.value = JSON.parse(guardado);
});


// Guardar carrito en localStorage cada vez que cambia
watch(carrito, (nuevo) => {
    localStorage.setItem('carrito', JSON.stringify(nuevo));
}, { deep: true });


// Funciones del carrito
function agregarAlCarrito(producto) {
    const index = carrito.value.findIndex(item => item.id === producto.id);
    if (index !== -1) {
        //Producto ya existe --> sumar cantidad
        carrito.value[index].cantidad += 1;
    } else {
        //Producto no existe --> se agrega
        carrito.value.push({ ...producto, cantidad: 1 });
    }
}

function eliminarDelCarrito(index) {
    carrito.value.splice(index, 1);
}

function vaciarCarrito() {
    carrito.value = [];
}

function comprarCarrito() {
    if (carrito.value.length > 0) {
        alert('¡Tu compra se ha realizado con éxito! 🎉');
        carrito.value = [];
    } else {
        alert('Tu carrito está vacío. Agrega productos antes de comprar.');
    }
}

function aumentarCantidad(index) {
    carrito.value[index].cantidad++;
}

function disminuirCantidad(index) {
    if (carrito.value[index].cantidad > 1) {
        carrito.value[index].cantidad--;
    } else {
        carrito.value.splice(index, 1); // Elimina producto si llega a cero
    }
}

// Computed
const totalCarrito = computed(() =>
    carrito.value.reduce((acc, item) => acc + item.precio * item.cantidad, 0)
);
const contadorCarrito = computed(() =>
    carrito.value.reduce((acc, item) => acc + item.cantidad, 0)
);

const productosAMostrar = computed(() =>
    mostrarTodos.value ? productos.value : featuredProducts.value
);

</script>

<template>
    <NavBar 
    :usuario="usuario" 
    :contadorCarrito="contadorCarrito" 
    :carrito="carrito"
    :total="totalCarrito"
    @eliminar="eliminarDelCarrito"
    @vaciar="vaciarCarrito"
    @comprar="comprarCarrito"
    @aumentar="aumentarCantidad"
    @disminuir="disminuirCantidad"    
    />
    <Carrusel />
    <WelcomeTitle />
    <Buscador :productos="productos" />
    <FeaturedProductsCard :products="productosAMostrar" @agregar="agregarAlCarrito" @verTodos="mostrarTodos = true" />
    <Cart :carrito="carrito" :total="totalCarrito" @eliminar="eliminarDelCarrito" @vaciar="vaciarCarrito"
        @comprar="comprarCarrito" @aumentar="aumentarCantidad" @disminuir="disminuirCantidad" />
    <AboutUs />
    <Contacto />
    <Footer />
    <Whatsapp />
</template>

<style scoped></style>