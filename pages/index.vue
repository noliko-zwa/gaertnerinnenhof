<template>
  <div class="index container">
    <div class="index-wrapper">
      <Home :data="home"/>
      <About :data="about" />
      <Offering :data="offering" />
      <Market :data="market" />
      <Assistance :data="assintance" />
      <Contact :data="contact" />
    </div>
  </div>
</template>

<script>
import datas from '~/assets/json/data.json'
export default {
  layout: 'default',
  async asyncData({ $content }) {
    const datas = await $content('pages').fetch()
    const findData = (name) => datas.find((el) => el.slug === name)
    const menuList = [
      'home',
      'hof',
      'angebot',
      'kontakt',
      'mitarbeit',
      'vermaktung',
    ]
    const home = findData('home')
    const about = findData('hof')
    const offering = findData('angebot')
    const contact = findData('kontakt')
    const assintance = findData('mitarbeit')
    const market = findData('vermarktung')
    return {
      home,
      about,
      offering,
      contact,
      assintance,
      market,
    }
  },
}
</script>
