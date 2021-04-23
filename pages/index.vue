<template>
  <div class="index container">
    <div class="index-wrapper">
      <Home :data="datas[3]" />
      <About :data="datas[2]" />
      <Offering :data="datas[0]" />
      <Market :data="datas[6]" />
      <Assistance :data="datas[5]" />
      <Contact :data="datas[4]" />
    </div>
  </div>
</template>

<script>
export default {
  layout: 'default',
  async asyncData({ $content }) {
    const datas = await $content('pages').fetch()
    return {
      datas,
    }
  },
}
</script>
