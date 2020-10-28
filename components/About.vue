<template>
  <div class="about">
    hof
    <SubmenuHeader
      :barImg="data.headerImg"
      :headerImgText="data.headerImgText"
      :header="data.text01_header"
    />
    <TextBox
      :textHeader="data.text01_header"
      :textContent="data.text01"
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
.about {
  color: yellow;
}
</style>
