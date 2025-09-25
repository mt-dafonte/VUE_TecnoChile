<script setup>
import { defineProps, defineEmits } from 'vue';

const props = defineProps({
    carrito: {
        type: Array,
        required: true
    },

    total: {
        type: Number,
        required: true
    }
});

const emit = defineEmits(['eliminar', 'vaciar', 'comprar', 'aumentar', 'disminuir']);

function eliminar(index) {
    emit('eliminar', index);
}

function vaciar() {
    emit('vaciar');
}

function comprar() {
    emit('comprar');
}

function aumentar(index) {
    emit('aumentar', index);
}

function disminuir(index) {
    emit('disminuir', index);
}

</script>

<template>
    <div class="cart-container">
        <h3>Carrito de compras</h3>

        <!-- Mensaje si está vacío -->
        <p v-if="carrito.length === 0"> Tu carrito está vacío</p>

        <!-- Tabla si hay productos -->
        <table v-else class="table">
            <thead>
                <tr>
                    <th>ID</th>
                    <th>Nombre</th>
                    <th>Precio</th>
                    <th>Cantidad</th>
                    <th>Total</th>
                    <th>Acción</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="(item, index) in carrito" :key="index">
                    <td>{{ item.id }}</td>
                    <td>{{ item.nombre }}</td>
                    <td>{{ item.precio.toLocaleString('es-CL', { style: 'currency', currency: 'CLP' }) }}</td>
                  
                  <td>
                    <button class="btn btn-xs btn-secondary" @click="disminuir(index)">-</button>
                        <span class="mx-2">{{ item.cantidad }}</span>
                        <button class="btn btn-xs btn-secondary" @click="aumentar(index)">+</button>
                    </td>                
                
                    <td>{{ (item.precio * item.cantidad).toLocaleString('es-CL', {style: 'currency', currency: 'CLP'}) }}</td>
                    
                    <td><button class="btn btn-danger btn-xs" @click="eliminar(index)">X</button></td>
                </tr>
            </tbody>
        </table>

        
        <p v-if="carrito.length > 0"> 
            Total: {{ total.toLocaleString('es-CL', { style: 'currency', currency: 'CLP' }) }}</p>
        <button class="btn btn-secondary me-2" @click="vaciar" :disabled="carrito.length === 0">Vaciar Carrito</button>
        <button class="btn btn-success" @click="comprar" :disabled="carrito.length === 0">Comprar</button>
    </div>
</template>

<style scoped>
.btn-xs {
  padding: 0.2rem 0.4rem;  /* padding vertical y horizontal reducido */
  font-size: 0.7rem;        /* tamaño de letra más pequeño */
  line-height: 1;            /* opcional para ajustar altura */
}
</style>