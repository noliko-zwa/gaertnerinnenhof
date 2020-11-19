<template>
  <div class="imprint container">
    <SubmenuHeader
      :barImg="datas.impressum.headerImg"
      :headerImgText="datas.impressum.headerImgText"
      :header="datas.impressum.headerText"
    />
    <TextBox
      :textHeader="datas.impressum.text01_header"
      :textContent="datas.impressum.text01"
    />
    <TextBox
      :textHeader="datas.impressum.text02_header"
      :textContent="datas.impressum.text02"
    />
    <TextBox
      :textHeader="datas.impressum.text03_header"
      :textContent="datas.impressum.text03"
    />
    <TextBox
      :textHeader="datas.impressum.text04_header"
      :textContent="datas.impressum.text04"
    />
    <TextBox
      :textHeader="datas.impressum.text05_header"
      :textContent="datas.impressum.text05"
    />
    <TextBox
      :textHeader="datas.impressum.text06_header"
      :textContent="datas.impressum.text06"
    />
    <TextBox
      :textHeader="datas.impressum.text07_header"
      :textContent="datas.impressum.text07"
    />
    <TextBox
      :textHeader="datas.impressum.text08_header"
      :textContent="datas.impressum.text08"
    />
    <TextBox
      :textHeader="datas.impressum.text09_header"
      :textContent="datas.impressum.text09"
    />
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
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: left;
}
</style>
