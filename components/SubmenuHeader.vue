<template>
  <div class="submenu-header">
    <div class="submenu-header-img">
      <img v-bind:src="img" alt="img.alt">
    </div>
  </div>
</template>

<script>
  export default {
    props : ['img'],
  }
</script>
