<template>
  <div class="contact" id="contact">
    <SubmenuHeader
    :barImg="data.header_img"
    :headerImgText="data.header_img_text"
    :header="data.header_text"
    />
    <TextBox
      :textHeader="data.text01_header"
      :textContent="data.text01"
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
