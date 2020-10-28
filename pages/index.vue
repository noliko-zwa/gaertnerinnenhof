<template>
  <div class="container">
    <div>
      <Home :data="datas.home" />
      <About :data="datas.hof" />
      <Offering :data="datas.angebot" />
      <Assistance :data="datas.vermarktung" />
      <Market />
      <Contact />
    </div>
  </div>
</template>

<script>
import datas from '@/assets/json/data.json'
export default {
  layout: 'default',
  asyncData({ params }) {
    return { datas }
  },
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
