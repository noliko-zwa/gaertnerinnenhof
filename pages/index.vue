<template>
  <div class="index container">
    <div class="index-wrapper">
      <Home :data="datas[3]" />
      <About :data="datas[3]" />
      <Offering :data="datas[3]" />
      <Market :data="datas[1]" />
      <Assistance :data="datas[6]" />
      <Contact :data="datas[5]" />
    </div>
  </div>
</template>

<script>
import datas from '~/assets/json/data.json'
export default {
  layout: 'default',
  async asyncData({ $content }) {
    const datas = await $content('pages').fetch()
    console.log("data:", datas);
    return {
      datas,
    }
  },
}
</script>
