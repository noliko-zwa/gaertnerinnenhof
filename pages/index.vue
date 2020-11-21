<template>
  <div class="index container">
    <div class="index-wrapper">
      <Home :data="datas.home" />
      <About :data="datas.hof" />
      <Offering :data="datas.angebot" />
      <Market :data="datas.vermarktung" />
      <Assistance :data="datas.mitarbeit" />
      <Contact :data="datas.kontakt" />
    </div>
  </div>
</template>

<script>
import datas from '~/assets/json/data.json'
export default {
  layout: 'default',
  asyncData({ params }) {
    return { datas }
  },
}
</script>
