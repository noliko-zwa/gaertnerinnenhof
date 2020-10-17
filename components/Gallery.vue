<template>
  <div class="gallery carousel slide" data-ride="carousel">
    <ol class="carousel-indicators">
      <li
        data-target="#carouselExampleIndicators"
        data-slide-to="0"
        class="active"
      ></li>
      <li v-for="(img, idx) in images" :key="img" data-target="#carouselExampleIndicators" data-slide-to="idx"></li>
    </ol>
    <div class="carousel-inner">
      <div v-for="(img, idx) in images" :key="idx" class="carousel-item active">
        <img class="d-block w-100" :src="img.src" alt="{{ img.info }}" />
      </div>
    </div>
    <a
      class="carousel-control-prev"
      href="#carouselExampleIndicators"
      role="button"
      data-slide="prev"
    >
      <span class="carousel-control-prev-icon" aria-hidden="true"></span>
      <span class="sr-only">Previous</span>
    </a>
    <a
      class="carousel-control-next"
      href="#carouselExampleIndicators"
      role="button"
      data-slide="next"
    >
      <span class="carousel-control-next-icon" aria-hidden="true"></span>
      <span class="sr-only">Next</span>
    </a>
  </div>
</template>

<script>
export default {
  props: {
    images: Array,
  },
}
</script>
