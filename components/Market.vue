<template>
  <div class="market">
    <SubmenuHeader
      :barImg="data.headerImg"
      :headerImgText="data.headerImgText"
      :header="data.text01_header"
    />
    <Table :header="data.table01_header" :items="data.table01"/>
  </div>
</template>
<script>
export default {
  props: {
    data: {
      type: Array,
      required: true,
    },
  },
}
</script>
