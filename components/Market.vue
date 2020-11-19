<template>
  <div class="market" id="market">
    <SubmenuHeader
      :barImg="data.headerImg"
      :headerImgText="data.headerImgText"
      :header="data.headerText"
    />
    <Table :header="data.table01_header" :items="data.table01" />
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
