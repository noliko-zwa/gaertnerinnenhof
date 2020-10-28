<template>
  <div class="about">
    hof
    <SubmenuHeader
      :barImg="data.headerImg"
      :headerImgText="data.headerImgText"
      :header="data.text01_header"
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
