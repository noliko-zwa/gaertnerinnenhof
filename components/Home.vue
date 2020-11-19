<template>
  <div class="home" id="home-page">
    <div class="logo wrapper">
      <h1>
        <img src="../static/img/logo.svg" alt="logo" />
      </h1>
    </div>
    <SubmenuHeader
      :barImg="data.headerImg"
      :headerImgText="data.headerImgText"
      :header="data.headerText"
    />
    <TextBox :textHeader="data.text01_header" :textContent="data.text01" />
    <Gallery :imageHeader="data.galleryText" :images="data.galleryImg" />
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
