<template>
  <div class="contact">
    <SubmenuHeader
    :barImg="data.headerImg"
    :headerImgText="data.headerImgText"
    :header="data.headerText"
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
