<template>
  <div class="index container">
    <div class="index-wrapper">
      <Home :data="datas[6]" />
      <About :data="datas[1]" />
      <Offering :data="datas[0]" />
      <Market :data="datas[5]" />
      <Assistance :data="datas[4]" />
      <Contact :data="datas[3]" />
    </div>
  </div>
</template>

<script>
import datas from '~/assets/json/data.json'
export default {
  layout: 'default',
  async asyncData({ $content }) {
    const datas = await $content('pages').fetch()
    return {
      datas,
    }
  }
}

</script>
