<template>
  <div class="container">
    <div>
      <Home />
      <About />
      <Offering />
      <Assistance />
      <Market />
      <Contact />
    </div>
  </div>
</template>
<script>
export default {
  layouts: 'default',
}
</script>

<style lang="scss">
.container {
  margin: 0 auto;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}
</style>
