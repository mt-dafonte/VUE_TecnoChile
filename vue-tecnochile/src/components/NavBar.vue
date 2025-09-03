<script setup>
</script>

<template>
 <nav class="navbar navbar-expand-lg bg-body-tertiary">
      <div class="container-fluid">
        <a class="navbar-brand" href="index.html">
          <h2>Tecno Chile</h2>
        </a>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup"
          aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
          <ul class="navbar-nav ms-auto">
            <li class="nav-item">
              <a class="nav-link active" aria-current="page" href="products.html">Productos</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#aboutUs">Sobre Nosotros</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#contact">Contacto</a>
            </li>
            <li class="nav-item">
  <a class="nav-link" href="admin.html">Admin</a>
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
</template>

<style scoped>

</style>