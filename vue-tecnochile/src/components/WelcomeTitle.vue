<script setup>
import { ref, onMounted} from 'vue';

const userName = ref('');

onMounted(() => {
    let user = localStorage.getItem("user");
    if (!user) {
        user = prompt("Ingrese su nombre y apellido");
    }

    if(user) {
        localStorage.setItem("user", user);
        userName.value = user;
    }
});
</script>

<template>
    <section class="container my-5 text-center">
      <h2 id="bienvenida">Bienvenido {{ userName }} a nuestra tienda digital.</h2>
    </section>
</template>

<style scoped>
#bienvenida {
  padding: 20px;
  margin: 80px 0;
  font-size: 2.0rem;
}
@media (max-width: 768px) {
  #bienvenida {
    padding: 10px;
    margin: 40px 0;
    font-size: 1.5rem;
  }
}
</style>