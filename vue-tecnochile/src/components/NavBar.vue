<script setup>
import { ref } from 'vue';
import { user, logoutUser } from '../store/auth.js';
import { login } from '../services/auth.js';

const email = ref('');
const password = ref('');
const error = ref('');

const handleLogin = async () => {
    try {
        error.value = '';
        const userData = await login({ email: email.value, password: password.value });
        user.value = userData; // Actualiza el store
        
        // Obtiene la instancia del modal de Bootstrap y lo oculta
        const loginModalElement = document.getElementById('loginModal');
        const modalInstance = bootstrap.Modal.getInstance(loginModalElement);
        if (modalInstance) {
            modalInstance.hide();
        }

        alert(`¡Bienvenido, ${userData.email}!`);

    } catch (err) {
        error.value = err.message;
    }
};

const handleLogout = () => {
  logoutUser();
  alert('Has cerrado sesión.');
};
</script>

<template>
  <nav class="navbar navbar-expand-lg bg-body-tertiary">
    <div class="container-fluid">
        <a class="navbar-brand" href="#">
          <h2>Tecno Chile</h2>
        </a>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup"
          aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
          <ul class="navbar-nav ms-auto">
            <li class="nav-item">
              <a class="nav-link active" aria-current="page" href="#">Productos</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#aboutUs">Sobre Nosotros</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#contact">Contacto</a>
            </li>
            <li class="nav-item" v-if="!user">
                <a class="nav-link" href="#" data-bs-toggle="modal" data-bs-target="#loginModal">Login</a>
            </li>
            <li class="nav-item dropdown" v-else>
                <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  Hola, {{ user.email }}
                </a>
                <ul class="dropdown-menu">
                  <li><a class="dropdown-item" href="#">Mi perfil</a></li>
                  <li><hr class="dropdown-divider"></li>
                  <li><a class="dropdown-item" href="#" @click.prevent="handleLogout">Cerrar Sesión</a></li>
                </ul>
            </li>
            <li class="nav-item">
                <button class="btn btn-dark" id="btnCarrito">
                  <i class="fa-solid fa-cart-shopping"></i>
                  <span id="contadorCarrito">0</span>
                </button>
            </li>
          </ul>
        </div>
      </div>
  </nav>

  <div class="modal fade" id="loginModal" tabindex="-1" aria-labelledby="loginModalLabel" aria-hidden="true">
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title" id="loginModalLabel">Inicio de Sesión</h5>
          <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>
        <div class="modal-body">
          <form @submit.prevent="handleLogin">
            <div class="mb-3">
              <label for="email" class="form-label">Correo Electrónico:</label>
              <input type="email" class="form-control" id="email" v-model="email" required>
            </div>
            <div class="mb-3">
              <label for="password" class="form-label">Contraseña:</label>
              <input type="password" class="form-control" id="password" v-model="password" required>
            </div>
            <button type="submit" class="btn btn-primary w-100">Iniciar Sesión</button>
            <p v-if="error" class="text-danger mt-3">{{ error }}</p>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
</style>