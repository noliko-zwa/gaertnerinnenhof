<template>
  <div class="market" id="market">
    <SubmenuHeader
      :barImg="data.header_img"
      :headerImgText="data.header_img_text"
      :header="data.header_text"
    />
    <TextBox :textHeader="data.text01_header" :textContent="data.text01" />
    <Table :header="data.table01_header" :items="data.table01" />
    <Table :header="data.table02_header" :items="data.table02" />
    <Table :header="data.table03_header" :items="data.table03" />
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
