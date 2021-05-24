<template>
  <div class="index container">
    <div class="index-wrapper">
      <Home :data="home" :instagram="instaData" />
      <About :data="about" />
      <Offering :data="offering" />
      <Market :data="market" />
      <Assistance :data="assintance" />
      <Contact :data="contact" />
    </div>
  </div>
</template>

<script>
export default {
  layout: 'default',
  async asyncData({ $content, $axios }) {
    const datas = await $content('pages').fetch()
    const findData = (name) => datas.find((el) => el.slug === name)
    const home = findData('home')
    const about = findData('hof')
    const offering = findData('angebot')
    const contact = findData('kontakt')
    const assintance = findData('mitarbeit')
    const market = findData('vermarktung')

    const instagram = await $axios.$get(
      'https://graph.facebook.com/v6.0/17841410518512652?fields=name%2Cmedia.limit(1)%7Bcaption%2Cmedia_url%2Cthumbnail_url%2Ctimestamp%2Cpermalink%7D&access_token=EAACY49ChnmYBAP7HxSuDbMvjFEIPYqLTold8QFvmN8Kn8Hf4exJQLOgZCjIIu2kyZChtBGKzkemWdoKOd94BNDdcZCQd6ZBid1Qn6asmRa12RYvG7Gf2ZAjZC5BzUkUSvxXaiJH0sDJHfC2H5Iqjk4jSqkvRppbdJn3ROHQ14hRgYyxGTlTSTb'
    )
    const instaData = instagram.media.data
    return {
      home,
      about,
      offering,
      contact,
      assintance,
      market,
      instaData,
    }
  },
}
</script>
