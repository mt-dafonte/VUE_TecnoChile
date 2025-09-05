<script setup>

</script>

<template>

  <div id="carouselExampleCaptions" class="carousel slide">
      <div class="carousel-indicators">
        <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" class="active"
          aria-current="true" aria-label="Slide 1"></button>
        <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1"
          aria-label="Slide 2"></button>

      </div>
      <div class="carousel-inner" style="height: 500px;"> <!-- Altura fija para el contenedor -->
        <div class="carousel-item active h-100"> <!-- h-100 para que ocupe todo el alto -->
          <img src="https://cdn.pixabay.com/photo/2023/03/03/19/19/ai-generated-7828310_1280.jpg"
            class="d-block w-100 h-100 object-fit-cover" alt="...">
          <div class="carousel-caption d-none d-md-block">
            <h4>Bienvenidos a Tecno Chile </h4>
            <p>Somos la tienda de tecnología número uno de Chile.</p>
          </div>
        </div>
        <div class="carousel-item h-100">
          <img src="https://cdn.pixabay.com/photo/2020/10/21/18/07/laptop-5673901_1280.jpg"
            class="d-block w-100 h-100 object-fit-cover" alt="...">
          <div class="carousel-caption d-none d-md-block">
            <h4> Descubre sobre lo último en tecnología </h4>
            <p>Descubre nuestra amplia gama de productos tecnológicos.</p>
          </div>
        </div>
      </div>
      <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions"
        data-bs-slide="prev">
        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Previous</span>
      </button>
      <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions"
        data-bs-slide="next">
        <span class="carousel-control-next-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Next</span>
      </button>
    </div>
</template>


<style scoped>
</style>