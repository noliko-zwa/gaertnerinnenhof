<template>
  <div class="imprint container">
    <SubmenuHeader
      :barImg="datas.header_img"
      :headerImgText="datas.header_img_text"
      :header="datas.header_text"
    />
    <TextBox :textHeader="datas.text01_header" :textContent="datas.text01" />
    <div class="text-box sns">
      <div class="text-box--wrapper wrapper">
        <div class="text-box--content">
          <div class="bio-logo">
            <img src="/img/EU_Organic_Logo_Colour_rgb.jpg" />
          </div>
        </div>
      </div>
    </div>
    <TextBox :textHeader="datas.text02_header" :textContent="datas.text02" />
    <TextBox :textHeader="datas.text03_header" :textContent="datas.text03" />
    <TextBox :textHeader="datas.text04_header" :textContent="datas.text04" />
    <TextBox :textHeader="datas.text05_header" :textContent="datas.text05" />
    <TextBox :textHeader="datas.text06_header" :textContent="datas.text06" />
    <TextBox :textHeader="datas.text07_header" :textContent="datas.text07" />
    <TextBox :textHeader="datas.text08_header" :textContent="datas.text08" />
    <TextBox :textHeader="datas.text09_header" :textContent="datas.text09" />
  </div>
</template>

<script>
import datas from '@/assets/json/data.json'
export default {
  layout: 'default',
  async asyncData({ $content }) {
    const datas = await $content('pages/impressum').fetch()

    return {
      datas,
    }
  },
}
</script>

<style lang="scss">
.container {
  margin: 0 auto;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: left;
}
</style>
