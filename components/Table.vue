<template>
  <div class="table">
    <div class="table--header wrapper">
      <h3>{{ header }}</h3>
    </div>
    <div class="table--wrapper wrapper">
      <b-table striped hover :items="items"></b-table>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    header: {
      type: String,
      require: false,
    },
    items: {
      type: Array,
      require: true,
    },
  },
}
</script>
