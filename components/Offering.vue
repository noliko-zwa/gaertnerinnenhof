<template>
  <div class="offering">
    <SubmenuHeader
    :barImg="data.headerImg"
    :headerImgText="data.headerImgText"
    :header="data.headerText"
    />
    <TextBox
      :textHeader="data.text01_header"
      :textContent="data.text01"
    />
    <Gallery
      :imageHeader="data.galleryText"
      :images="data.galleryImg"
    />
    <TextBox
      :textHeader="data.text02_header"
      :textContent="data.text02"
    />
  </div>
</template>

<script>
export default {
  props: {
    data: {
      type: Object,
      required: true,
    },
  },
}
</script>
<style lang="scss" scoped>
.offering {
  color: palevioletred;
}
</style>
