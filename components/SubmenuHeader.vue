<template>
  <figure class="submenu-header">
    <div class="submenu-header-img">
      <img :src="barImg" alt="img.alt" />
    </div>
    <h2>{{ header }}</h2>
  </figure>
</template>

<script>
export default {
  props: {
    barImg: String,
    header: String,
  },
}
</script>
