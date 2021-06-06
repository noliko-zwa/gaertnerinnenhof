<template>
  <figure class="submenu-header">
    <div class="submenu-header--img">
      <img v-bind:src="barImg" :alt="headerImgText" />
    </div>
    <div class="submenu-header--header wrapper">
      <h2>{{ header }}</h2>
    </div>
  </figure>
</template>

<script>
export default {
  props: {
    barImg: {
      type: String,
      default: '0',
      required: true,
    },
    headerImgText: {
      type: String,
      default: 'image',
      required: false,
    },
    header: {
      type: String,
      default: ' ',
      required: false,
    },
  },
}
</script>
