<template>
  <div class="home">
    <div class="logo">
      <h1>
        <img src="../static/img/logo.svg" alt="logo" />
      </h1>
    </div>
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
.home {
  color: pink;
  .logo {
    max-width: 590px;
    img {
      width: 100%;
      height: auto;
    }
  }
}
</style>
