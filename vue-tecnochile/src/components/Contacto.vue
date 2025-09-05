<script setup>
import Formulario from './Formulario.vue';
</script>

<template>
    <section id="contact" class="container my-custom-5">
        <div class="row g-5 align-items-end">
            <div class="col-md-6">
                <h2 class="my-3">Contacto</h2>

                <ul class="list-unstyled mb-4">
                    <li class="mb-2">
                        <i class="bi bi-geo-alt-fill me-2"></i>
                        Avenida Providencia 2124, local 6-A, Santiago, Chile
                    </li>

                    <li class="mb-2">
                        <i class="bi bi-envelope-fill me-2"></i>
                        contacto@tecnochile.cl
                    </li>

                    <li class="mb-2">
                        <i class="bi bi-telephone me-2"></i>
                        +56 9 1234 5678
                    </li>
                </ul>

                <div class="ratio ratio-16x9">
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3330.0364288816886!2d-70.6113129!3d-33.4222946!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9662cf661383b143%3A0xa54e2a603f76fcc6!2sGaler%C3%ADa%20Drugstore!5e0!3m2!1ses!2scl!4v1754628211557!5m2!1ses!2scl"
                        width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy"
                        referrerpolicy="no-referrer-when-downgrade">
                    </iframe>
                </div>
            </div>
            <Formulario />
        </div>
    </section>
</template>

<style scoped>
</style>