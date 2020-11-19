<template>
  <div class="offering" id="offering">
    <SubmenuHeader
      :barImg="data.headerImg"
      :headerImgText="data.headerImgText"
      :header="data.headerText"
    />
    <TextBox :textHeader="data.text01_header" :textContent="data.text01" />
    <Gallery :imageHeader="data.galleryText" :images="data.galleryImg" />
    <TextBox :textHeader="data.text02_header" :textContent="data.text02" />
    <TextBox :textHeader="data.text03_header" :textContent="data.text03" />
    <TextBox :textHeader="data.text04_header" :textContent="data.text04" />
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
